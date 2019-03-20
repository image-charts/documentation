# tested on ruby 2.3
require 'openssl'
require 'uri'

SECRET_KEY = "MY_ACCOUNT_ID"
ACCOUNT_ID = "MY_SECRET_KEY"

# don't forget to add your account id before signing it
# Then generate the watermark-free url
# CGI::escape will encode URL-unsafe characters for us
rawQuerystring = URI.encode("cht=bvs&icac=#{ACCOUNT_ID}&chd=s:93zyvneTTO&chs=400x401")

signature = OpenSSL::HMAC.hexdigest('SHA256', SECRET_KEY, rawQuerystring)
publicUrl = "https://image-charts.com/chart?#{rawQuerystring}&ichm=#{signature}"

# Finally send it to slack or via email, here we simply use puts
puts publicUrl
