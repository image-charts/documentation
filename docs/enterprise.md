---
title: Enterprise version
description: "Generate watermark-free chart image by signing request URLs with HMAC."
sidebar_position: 14
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enterprise version

This section is dedicated to the paying enterprise version. This plan uses the same API but is **watermark free** and you can setup your **own sub-domain** for the perfect integration.

Once subscribed to the enterprise plan you will receive an `account id` and a `secret key`. These two keys are mandatory to sign your request and remove the watermark.

## Remove Image-Charts watermark by signing URLs

Signing request **must be done server-side** otherwise anyone will be able to reuse your `secret key`. Beside signing there are no other computations involved server-side. Image-Charts is still the fastest option compared to server-side charts setup and generation.

You will need to sign the url using `HMAC-SHA256` hash algorithm. Before hashing the URL, add your account id inside it using the `&icac=YOUR_ACCOUNT_ID` parameter, then hash it and add the resulting hash in the `&ichm=GENERATED_HASH` query parameter.

:::tip (easy) Prefer to not encode query parameters before computing the signature
In order to be easier to handle, **Image-Charts checks the signature for both encoded and decoded query params**. You do not need to worry about generating a string of the whole query with the right URL-safe characters anymore, if the basic query string check does not work, Image-Charts will also try to decode every query parameter pairs and then check the resulting query string against your signature (`ichm`).

It means you don't have to worry about URL-encoding algorithm and you can generate the signature key based on an unencoded URL-unsafe query string and it will work.

**Generating a signature based on unencoded URL parameters is the recommended way** as it's much more robust and abstract away the encoding the transportation uses (e.g. webmail proxies, web-browsers, enterprise proxies).
:::

:::tip (advanced) What if I want to use special characters like `%` or `&` in my title, labels, legends... ?
If you want to use special characters like `%` or `&` in chart title, labels, legends... You will need to update our code examples below to encode every query parameter values before signing the query string. Image Charts API will detect that the signature (`ichm`) was computed against the already encoded query string and will work as expected.
:::


Note that Image-Chart supports `ichm` parameter anywhere in the query string. It can be at the beginning (e.g. `https://image-charts.com/chart?{QUERY_STRING}&ichm=GENERATED_HASH`), in the middle (e.g. `https://image-charts.com/chart?{QUERY_STRING_CHUNK}&ichm=GENERATED_HASH&{REST_OF_QUERY_STRING}`) or at the end (e.g `https://image-charts.com/chart?ichm=GENERATED_HASH&{QUERY_STRING}`).


As an example, here is a graph signed without watermark:

![chart](https://image-charts.com/chart?chd=t%3A40%2C20%2C10%2C20%2C40%2C20%2C20%2C40%2C10%2C20%2C40%2C60%7C55%2C35%2C5%2C45%2C25%2C45%2C45%2C45%2C25%2C15%2C55%2C45&chf=b0%2Clg%2C90%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cb1%2Clg%2C90%2C8bc34a%2C0.2%2C009688%2C1&chof=.png&chs=700x200&cht=lc&chtt=No%20watermark%21&icac=documentation&ichm=d824323e74a1caeebd47d994152639728997b9c572774b79f8ebf20f8b31a405)


```
&icac=documentation
&ichm=d824323e74a1caeebd47d994152639728997b9c572774b79f8ebf20f8b31a405
```

Signing your URLs will ensure that no one beside you created it and Image-Charts will verify the generated hash to be sure your account created it.

### Official Image-Charts libraries

Image-Charts offers SDK in the following languages:

- [JavaScript/NodeJS](https://github.com/image-charts/javascript) for [Image-Charts `/chart` API](/reference/chart-type)
- [JavaScript/NodeJS](https://github.com/image-charts/chartjs-image-javascript) for [Image-Charts `chart.js` API](/chart-js)
- [Java](https://github.com/image-charts/java)
- [C#](https://github.com/image-charts/c-sharp)
- [Ruby](https://github.com/image-charts/ruby)
- [PHP](https://github.com/image-charts/php)
- [Python 3.6+](https://github.com/image-charts/python)

### Code snippets

Here are some code examples in various programming languages that rely mainly on their standard library:

<Tabs>
<TabItem value="nodejs" label="NodeJS 6+" default>

```js
// HMAC Helper
const crypto = require('crypto');
const qs = require('querystring');

function sign(secretKey, query) {
  return crypto
    .createHmac('sha256', secretKey)
    .update(query)
    .digest('hex');
}

// Now let's generate a chart url that will be sent inside an email or a bot message

// First setup our account
const ACCOUNT_ID = 'MY_ACCOUNT_ID';
const SECRET_KEY = 'MY_SECRET_KEY';

// Then generate the watermark-free url
const rawQuerystring = qs.stringify({
  cht: 'bvs',
  icac: ACCOUNT_ID, // don't forget to add your account id before signing it
  chd: 's:93zyvneTTO',
  chs: '400x401',
}, null, null, {
  // no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
  // learn why in our documentation https://documentation.image-charts.com/enterprise/
  encodeURIComponent: (valueWithoutEncoding) => valueWithoutEncoding
});
const signature = sign(SECRET_KEY, rawQuerystring);
const publicUrl = `https://image-charts.com/chart?${rawQuerystring}&ichm=${signature}`;

// Finally send it to slack or via email, here we simply use console.log
console.log(publicUrl);
```

</TabItem>
<TabItem value="googlesheets" label="Google Sheets (via Google Apps Script)">

```js
//
// Check out the usage a spreadsheet example here:
// https://docs.google.com/spreadsheets/d/1n7ipCKWwWSEsUnNS0IoN0kb3xjBXxWfuqIU32ns3RBs/edit#gid=0
//

/**
 * Convert an Image Charts URL to Enterprise or Enterprise+ mode
 *
 * @param {string} url Chart url. Example: https://image-charts.com/chart?chco=27c9c2|1869b7&chd=a:1250,135&chs=711x313&cht=bhg
 * @param {string} account_id The account id you received as credential
 * @param {string} secret_key The secret key you received as credential
 * @return A signed URL that activates Enterprise or Enterprise+ features.
 * @customfunction
 */
function IMAGECHARTS(url, account_id, secret_key) {
  function sign(secret_key, query) {
    var digest = Utilities.computeHmacSha256Signature(query, secret_key, Utilities.Charset.UTF_8);
    var sig = digest.reduce(function(str,chr){
      chr = (chr < 0 ? chr + 256 : chr).toString(16);
      return str + (chr.length==1?'0':'') + chr;
    },'');;
    return sig;
  }

  function sign_url(url, account_id, secret_key){
    if(!url || typeof url !== 'string'){
      throw new Error('Please specify an Image-Charts URL. Example: "https://image-charts.com/chart?chco=27c9c2|1869b7&chd=a:1250,135&chs=711x313&cht=bhg"');
    }

    if(!account_id || !secret_key){
      throw new Error('"account_id" and "secret_key" must be specified. Learn more at https://documentation.image-charts.com/enterprise/');
    }

    const endpoint = 'https://image-charts.com/chart?';

    if(!url.startsWith(endpoint)){
      throw new Error('Chart URL must start with "https://image-charts.com/chart?". Example: "https://image-charts.com/chart?chco=27c9c2|1869b7&chd=a:1250,135&chs=711x313&cht=bhg"');
    }

    const query_string = url.replace(endpoint, '') + '&icac=' + account_id; // add account_id

    const signature = sign(secret_key, query_string);
    const public_url = `${endpoint}${query_string}&ichm=${signature}`;
    return public_url;
  }

  if(Array.isArray(url)){
    return url.map(url => sign_url(url[0], account_id, secret_key));
  }

  return sign_url(url, account_id, secret_key);
}
```

</TabItem>
<TabItem value="vanillajs" label="JavaScript (vanilla ES6 env, no require)">

```js
// [copy/paste the content of https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js here ]
// don't forget to do what's described on the line above

// note: ONLY USE THIS SCRIPT if you CANNOT use require() and external libraries but are still running inside an ES6-like environment

function qs_stringify(obj){
  return Object.keys(obj).reduce((m, k, idx, keys) => {
    return m + (idx !== 0 ? '&' : '') + k + '=' + obj[k];
  },'');
}

function sign(secretKey, query) {
  return CryptoJS.enc.Hex.stringify(exports.HmacSHA256(query, secretKey));
}

// Now let's generate a chart url that will be sent inside an email or a bot message

// First setup our account
const ACCOUNT_ID = 'MY_ACCOUNT_ID';
const SECRET_KEY = 'MY_SECRET_KEY';

// Then generate the watermark-free url
const rawQuerystring = qs_stringify({
  cht: 'bvs',
  icac: ACCOUNT_ID, // don't forget to add your account id before signing it
  chd: 's:93zyvneTTO',
  chs: '400x401',
});

const signature = sign(SECRET_KEY, rawQuerystring);
const publicUrl = `https://image-charts.com/chart?${rawQuerystring}&ichm=${signature}`;

// Finally send it to slack or via email, here we simply use console.log
console.log(publicUrl);
```

</TabItem>
<TabItem value="python" label="Python 3">

```python
# -*- coding: utf-8 -*-

from urllib.parse import urlencode, quote_plus
import hmac, hashlib, codecs

def sign(query, secretKey):
  return codecs.getencoder('hex')(hmac.new(secretKey.encode('utf-8'), query.encode('utf-8'), hashlib.sha256).digest())[0].decode('utf-8')

if __name__ == '__main__':
  # First setup our account
  ACCOUNT_ID = 'MY_ACCOUNT_ID'
  SECRET_KEY = 'MY_SECRET_KEY'

  # Do not activate character encoding if you do not need parameter values
  # containing URL unsafe characters like "&".
  ENCODE_VALUES = True

  # Then generate the watermark-free url
  # no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
  # learn why in our documentation https://documentation.image-charts.com/enterprise/
  rawQuerystring = [
      ('cht', 'bvs'),
      ('chd', 's:93zyvneTTO'),
      ('chtt', 'Hello world 20%'),
      ('chs', '400x401'),
      ('icac', ACCOUNT_ID)  # don't forget to add your account id before signing it
  ]

  queryString = "&".join( [ param +'='+ (quote_plus(value) if ENCODE_VALUES else value) for (param, value) in rawQuerystring ] )
  signature = sign(queryString, SECRET_KEY)
  publicUrl = "https://image-charts.com/chart?" + queryString + "&ichm=" + signature

  # Finally send it to slack or via email, here we simply use print
  print(publicUrl)
```

</TabItem>
<TabItem value="php" label="PHP 5+">

```php
<?php
function sign($query, $secretKey) {
  return hash_hmac('sha256', $query, $secretKey);
}

// First setup our account
define('ACCOUNT_ID', 'MY_ACCOUNT_ID');
define('SECRET_KEY', 'MY_SECRET_KEY');

// Then generate the watermark-free url
// no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
// learn why in our documentation https://documentation.image-charts.com/enterprise/
$rawQuerystring = urldecode(http_build_query(array(
  'cht' => 'bvs',
  'chd' => 's:93zyvneTTO',
  'chs' => '400x401',
  'chtt' => 'Hello world',
  'icac' => ACCOUNT_ID  // don't forget to add your account id before signing it
)));

$signature = sign($rawQuerystring, SECRET_KEY);
$publicUrl = 'https://image-charts.com/chart?' . $rawQuerystring . '&ichm=' . $signature;

// Finally send it to slack or via email, here we simply use print
echo $publicUrl;
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Globalization;
using System.Security.Cryptography;
using System.Text;

namespace CustomExtensions
{
    public static class StringExtension
    {
        public static string HmacSha256Digest(this string message, string secret)
        {
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] keyBytes = encoding.GetBytes(secret);
            byte[] messageBytes = encoding.GetBytes(message);
            System.Security.Cryptography.HMACSHA256 cryptographer = new System.Security.Cryptography.HMACSHA256(keyBytes);
            byte[] bytes = cryptographer.ComputeHash(messageBytes);
            return BitConverter.ToString(bytes).Replace("-", "").ToLower();
        }
    }
}

namespace App
{
    using CustomExtensions;
    public class Program
    {
        public static void Main(string[] args)
        {
            string account_id = "YOUR_ACCOUNT_ID";
            string secret_key = "YOUR_SECRET_KEY";

            var sbchart = new StringBuilder();

            // Then generate the watermark-free url
            // no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
            // learn why in our documentation https://documentation.image-charts.com/enterprise/
            sbchart.AppendFormat("cht={0}", "pd");
            sbchart.AppendFormat("&icac={0}", account_id);
            sbchart.AppendFormat("&chd={0}", "a:124,736,372");
            sbchart.AppendFormat("&chs={0}", "400x400");
            sbchart.AppendFormat("&chdl={0}", "Expansion|Payroll|Equipment");
            sbchart.AppendFormat("&chli={0}", "95K€");
            sbchart.AppendFormat("&chl={0}", "10K€|40K€|45K€");

            string querystring = sbchart.ToString();
            var payload = Encoding.UTF8.GetBytes(querystring);
            var hmacSHA = new HMACSHA256(Encoding.UTF8.GetBytes(secret_key));
            var hash = hmacSHA.ComputeHash(payload, 0, payload.Length);
            string signature = BitConverter.ToString(hash).Replace("-", "").ToLower();

            Console.WriteLine("https://image-charts.com/chart?ichm="+signature+"&"+querystring);
        }
    }
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

class Program {
    public static void main(String[] args) throws UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException {
        // First setup our account
        String ACCOUNT_ID = "ACCOUNT_ID";
        String SECRET_KEY = "SECRET_KEY";

        // specify you querystring
        String querystring = "cht=bvs&icac=" + ACCOUNT_ID + "&chd=s:93zyvneTTO&chs=400x401";

        // don't forget to add your account id before signing it
        String signature = HmacSha256Digest(querystring, SECRET_KEY);

        // Then generate the watermark-free url
        String publicUrl = "https://image-charts.com/chart?" + querystring + "&ichm=" + signature;

        // Finally send it to slack or via email or inside an PDF report, here we print into the console output
        System.out.println(publicUrl);
    }


    public static String HmacSha256Digest(String data, String key) throws UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeyException {
        SecretKeySpec signingKey = new SecretKeySpec(key.getBytes("UTF-8"), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(signingKey);
        byte[] rawHmac = mac.doFinal(data.getBytes("UTF-8"));
        byte[] hexArray = {(byte)'0', (byte)'1', (byte)'2', (byte)'3', (byte)'4', (byte)'5', (byte)'6', (byte)'7', (byte)'8', (byte)'9', (byte)'a', (byte)'b', (byte)'c', (byte)'d', (byte)'e', (byte)'f'};
        byte[] hexChars = new byte[rawHmac.length * 2];
        for ( int j = 0; j < rawHmac.length; j++ ) {
            int v = rawHmac[j] & 0xFF;
            hexChars[j * 2] = hexArray[v >>> 4];
            hexChars[j * 2 + 1] = hexArray[v & 0x0F];
        }
        return new String(hexChars);
    }
}
```

</TabItem>
<TabItem value="ruby" label="Ruby 2.x">

```ruby
# tested on ruby 2.3
require 'openssl'
require 'uri'

SECRET_KEY = "MY_ACCOUNT_ID"
ACCOUNT_ID = "MY_SECRET_KEY"

# Then generate the watermark-free url
# no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
# learn why in our documentation https://documentation.image-charts.com/enterprise/
rawQuerystring = "cht=bvs&icac=#{ACCOUNT_ID}&chtt=Hello world&chd=s:93zyvneTTO&chs=400x401"

signature = OpenSSL::HMAC.hexdigest('SHA256', SECRET_KEY, rawQuerystring)
publicUrl = "https://image-charts.com/chart?#{rawQuerystring}&ichm=#{signature}"

# Finally send it to slack or via email, here we simply use puts
puts publicUrl
```

</TabItem>
<TabItem value="apex" label="Salesforce/Apex">

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

</TabItem>
<TabItem value="sql" label="SQL/Athena">

```sql
with query_string as (select * from (VALUES 'chd=t1:10,40,60,80,30,20|60,40,50,100,20,30&chs=999x600&cht=bvs&chxl=0:|Jan|Mar|Apr|May|Jun|Jul&chxt=x,y&chf=b0,lg,90,03a9f4,0,3f51b5,1&chm=D,03a9f4,1,0,5,1&icac=MY_ACCOUNT_ID') as t(qs))
select concat('https://image-charts.com/chart?', qs, '&ichm=', lower(to_hex(hmac_sha256(to_utf8(qs), to_utf8('MY_SECRET_KEY'))))) from query_string;
```

</TabItem>
</Tabs>

:::tip Want more?
Don't see your favorite language here? [Just ask us](mailto:support@image-charts.com) !
:::

## Online static chart generator

The easiest way to generate a watermark-free Image-Charts -- that is, to sign generated URL with HMAC algorithm -- is to use our [online url generator](https://editor.image-charts.com/?tab_editor=enterprise#https:/image-charts.com/chart?chd=a:30010,-30000,50000,80000,20000&chdl=Income&chf=b0,lg,90,EA469EFF,1,03A9F47C,0.4&chl=2014|2015|2016|2017|2018&chof=1535403433426&chs=700x300&cht=bvs&chxs=0N*cEURs*&chxt=y).


## Custom domain

Please contact our [support](mailto:support@image-charts.com) that will give you a `CNAME` to point to. Please also note that Image-Charts custom domain does not support SSL/TLS, must of our customers leverage services like AWS Cloudfront to handle that part.

### Editor's custom domain support

In [Image-Charts editor's](https://editor.image-charts.com) environment tab:

- click `Add new environment`
- set your environment name (e.g. `My Company`) and custom domain (e.g. `http://charts.my-domain.com`)
- click `Save`

The editor will now display both Image-Charts `Production` environment and `My Company` environment everywhere. Uncheck `Production` to only display charts using `http://charts.my-domain.com` custom domain.
