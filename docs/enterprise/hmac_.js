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
// qs.stringify will encode URL-unsafe characters for us
const rawQuerystring = qs.stringify({
  cht: 'bvs',
  icac: ACCOUNT_ID, // don't forget to add your account id before signing it
  chd: 's:93zyvneTTO',
  chs: '400x401',
}, null, null, {
  // not encoding URL parameters to compute the signature is our recommended way as its much more robust
  // read our documentation for explanations
  encodeURIComponent: (valueWithoutEncoding) => valueWithoutEncoding
});
const signature = sign(SECRET_KEY, rawQuerystring);
const publicUrl = `https://image-charts.com/chart?${rawQuerystring}&ichm=${signature}`;

// Finally send it to slack or via email, here we simply use console.log
console.log(publicUrl);
