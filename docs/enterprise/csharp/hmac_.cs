// This script requires two DDL references:
// - System.Web.dll
// - System.Web.Services.dll
//
// To compile with mono:
// mcs -reference:System.Web.dll -reference:System.Web.Services.dll hmac_.cs

using System;
using System.Text;
using System.Collections.Specialized;

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

            // specify you query parameters
            NameValueCollection query = System.Web.HttpUtility.ParseQueryString(string.Empty);
            query["icac"] = account_id;
            query["cht"] = "bvs";
            query["chd"] = "s:93zyvneTTO";
            query["chs"] = "400x401";

            // we add this at the end of the query string because some email client look at the
            // end of the querystring to infer the extension
            query["chof"] = ".png";

            string querystring = query.ToString();
            string signature = querystring.HmacSha256Digest(secret_key);
            Console.WriteLine("https://image-charts.com/chart?ichm="+signature+"&"+querystring);
        }
    }
}
