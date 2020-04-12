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
