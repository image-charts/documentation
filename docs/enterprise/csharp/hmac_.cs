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

            var sbchart = new StringBuilder();

            // specify you querystring
            // Note: we use Uri.EscapeDataString instead of HttpUtility.UrlEncode,
            //       learn why there: https://stackoverflow.com/a/47877559/745121
            sbchart.AppendFormat("cht={0}", Uri.EscapeDataString("pd"));
            sbchart.AppendFormat("&icac={0}", Uri.EscapeDataString(account_id));
            sbchart.AppendFormat("&chd={0}", Uri.EscapeDataString("a:124,736,372"));
            sbchart.AppendFormat("&chs={0}", Uri.EscapeDataString("400x400"));
            sbchart.AppendFormat("&chdl={0}", Uri.EscapeDataString("Expansion|Payroll|Equipment"));
            sbchart.AppendFormat("&chli={0}", Uri.EscapeDataString("95K€"));
            sbchart.AppendFormat("&chl={0}", Uri.EscapeDataString("10K€|40K€|45K€"));

            var querystring = sbchart.ToString();
            string signature = querystring.HmacSha256Digest(secret_key);
            Console.WriteLine("https://image-charts.com/chart?ichm="+signature+"&"+querystring);
        }
    }
}
