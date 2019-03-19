using System;
using System.Text;

namespace CustomExtensions
{
    public static class StringExtension
    {
        public static string HmacSha256Digest(this string message, string secret)
        {
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] keyBytes = encoding.GetBytes(secret);
            byte[] messageBytes = encoding.GetBytes(message);
            System.Security.Cryptography.HMACSHA256 cryptographer = new System.Security.Cryptography.HMACSHA256(keyBytes);
            byte[] bytes = cryptographer.ComputeHash(messageBytes);
            return BitConverter.ToString(bytes).Replace("-", "").ToLower();
        }
    }
}

namespace App
{
    using CustomExtensions;
    public class Program
    {
        public static void Main(string[] args)
        {
            string account_id = "YOUR_ACCOUNT_ID";
            string secret_key = "YOUR_SECRET_KEY";
            // specify you querystring
            string querystring = "cht=bvs&icac="+account_id+"&chd=s:93zyvneTTO&chs=400x401";
            string signature = querystring.HmacSha256Digest(secret_key);
            Console.WriteLine("https://image-charts.com/chart?"+querystring+"&ichm="+signature);
        }
    }
}
