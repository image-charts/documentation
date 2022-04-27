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
