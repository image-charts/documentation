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
