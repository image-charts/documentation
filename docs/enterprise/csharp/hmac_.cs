using System;
using System.Globalization;
using System.Security.Cryptography;
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

            var sbchart = new StringBuilder();

            // Then generate the watermark-free url
            // no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
            // learn why in our documentation https://documentation.image-charts.com/enterprise/
            sbchart.AppendFormat("cht={0}", "pd");
            sbchart.AppendFormat("&icac={0}", account_id);
            sbchart.AppendFormat("&chd={0}", "a:124,736,372");
            sbchart.AppendFormat("&chs={0}", "400x400");
            sbchart.AppendFormat("&chdl={0}", "Expansion|Payroll|Equipment");
            sbchart.AppendFormat("&chli={0}", "95K€");
            sbchart.AppendFormat("&chl={0}", "10K€|40K€|45K€");

            string querystring = sbchart.ToString();
            var payload = Encoding.UTF8.GetBytes(querystring);
            var hmacSHA = new HMACSHA256(Encoding.UTF8.GetBytes(secret_key));
            var hash = hmacSHA.ComputeHash(payload, 0, payload.Length);
            string signature = BitConverter.ToString(hash).Replace("-", "").ToLower();

            Console.WriteLine("https://image-charts.com/chart?ichm="+signature+"&"+querystring);
        }
    }
}
