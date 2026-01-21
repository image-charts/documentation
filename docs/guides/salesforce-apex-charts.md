---
title: Salesforce Apex Charts
description: "How to generate image charts from Salesforce Apex language"
sidebar_position: 4
---

# Salesforce Apex Charts

Lots of Image-Charts customers rely on Salesforce (e.g. Salesforce Cloud) to send charts to their own customers.

Salesforce leverage Apex programming language to be extensible. Here is below an helper class in Apex language:

```java
public with sharing class IMAGECHARTS {

  // First setup our account id and secret
  private static final String account_id = 'ACCOUNT_ID';
  private static final String secret_key = 'SECRET_KEY';

  /**
   * Sign an Image Charts URL to remove the watermark and activate Enterprise/Enterprise+ plan features
   *
   * @param {string} url Chart url. Example: https://image-charts.com/chart?chco=27c9c2|1869b7&chd=a:1250,135&chs=711x313&cht=bhg
   * @param {string} account_id The account id you received as credential
   * @param {string} secret_key The secret key you received as credential
   * @return A signed URL that activates Enterprise or Enterprise+ features.
   * @customfunction
   */
  private static String sign(String url, String secret_key){
    String algorithmName = 'hmacSHA256';
    Blob hmacData = Crypto.generateMac(algorithmName, Blob.valueOf(url), Blob.valueOf(secret_key));
    return EncodingUtil.convertToHex(hmacData);
  }

  /**
   * @return {string} Image-Charts signed URL or an empty string if something went wrong
   */
  private static String sign_url(String url, String account_id, String secret_key){
    if(url == null ){
      System.debug(LoggingLevel.ERROR,'Please specify an Image-Charts URL. Example: "https://image-charts.com/chart?chco=27c9c2|1869b7&chd=a:1250,135&chs=711x313&cht=bhg"');
      return '';
    }

    if(account_id == null || secret_key == null){
      System.debug(LoggingLevel.ERROR,'"account_id" and "secret_key" must be specified. Learn more at https://documentation.image-charts.com/enterprise/');
      return '';
    }

    String endpoint = 'https://image-charts.com/chart?';

    if(!url.startsWith(endpoint)){
      System.debug(LoggingLevel.ERROR,'Chart URL must start with "https://image-charts.com/chart?". Example: "https://image-charts.com/chart?chco=27c9c2|1869b7&chd=a:1250,135&chs=711x313&cht=bhg"');
      return '';
    }

    String cleanUrl = '';
    for( String s : url.split('&')) {
      List<String> sList = new List<String> (s.split('='));
      cleanUrl += sList[0] + '=' + EncodingUtil.urlEncode(sList[1],'UTF-8') + '&';
    }
    cleanUrl = cleanUrl.removeEnd('&');

    String query_string = cleanUrl.replace(endpoint, '') + '&icac=' + account_id; // add account_id
    String signature = IMAGECHARTS.sign(query_string, secret_key);
    String public_url = endpoint + query_string + '&ichm=' + signature;
    return public_url;
  }
}
```
