# -*- coding: utf-8 -*-

from urllib.parse import urlencode
import hmac, hashlib, codecs

def sign(query, secretKey):
  return codecs.getencoder('hex')(hmac.new(secretKey.encode('utf-8'), query.encode('utf-8'), hashlib.sha256).digest())[0].decode('utf-8')

if __name__ == '__main__':
  # First setup our account
  ACCOUNT_ID = 'MY_ACCOUNT_ID'
  SECRET_KEY = 'MY_SECRET_KEY'

  # Then generate the watermark-free url
  # no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
  # learn why in our documentation https://documentation.image-charts.com/enterprise/
  rawQuerystring = [
      ('cht', 'bvs'),
      ('chd', 's:93zyvneTTO'),
      ('chtt', 'Hello world'),
      ('chs', '400x401'),
      ('icac', ACCOUNT_ID)  # don't forget to add your account id before signing it
  ]

  queryString = "&".join( [ param +'='+ value for (param, value) in rawQuerystring ] )
  signature = sign(queryString, SECRET_KEY)
  publicUrl = "https://image-charts.com/chart?" + queryString + "&ichm=" + signature

  # Finally send it to slack or via email, here we simply use print
  print(publicUrl)
