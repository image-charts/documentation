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
