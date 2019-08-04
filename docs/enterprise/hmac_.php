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
