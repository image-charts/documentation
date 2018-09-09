<?php
function sign($query, $secretKey) {
  return hash_hmac('sha256', $query, $secretKey);
}

// First setup our account
define('ACCOUNT_ID', 'MY_ACCOUNT_ID');
define('SECRET_KEY', 'MY_SECRET_KEY');

// Then generate the watermark-free url
// http_build_query will encode URL-unsafe characters for us

$rawQuerystring = http_build_query(array(
  'cht' => 'bvs',
  'chd' => 's:93zyvneTTO',
  'chs' => '400x401',
  'icac' => ACCOUNT_ID  // don't forget to add your account id before signing it
));

$signature = sign($rawQuerystring, SECRET_KEY);
$publicUrl = 'https://image-charts.com/chart?' . $rawQuerystring . '&ichm=' . $signature;

// Finally send it to slack or via email, here we simply use print
echo $publicUrl;
