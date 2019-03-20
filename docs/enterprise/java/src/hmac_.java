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
