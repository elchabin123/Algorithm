using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace Neetcode
{
    //compare the s string with the reverse of the s string
    public class Valid_Palindrome
    {
        public static void Main(string[] args)
        {
            var s = "Ws it a car or a cat I saw?";
            Console.WriteLine(IsPalindrome(s));
        }
        public static bool IsPalindrome(string s)
        {
            string newStr = "";
            foreach (char c in s)
            {
                if (char.IsLetterOrDigit(c))
                {
                    newStr += char.ToLower(c);
                }
            }
            bool output = newStr == new string(newStr.Reverse().ToArray());
            return output;
        }

        // using  2 pointer to compare the string
        public bool IsPalindrome2Poiter(string s)
        {
            int l = 0, r = s.Length - 1;

            while (l < r)
            {
                while (l < r && !AlphaNum(s[l]))
                {
                    l++;
                }
                while (r > l && !AlphaNum(s[r]))
                {
                    r--;
                }
                if (char.ToLower(s[l]) != char.ToLower(s[r]))
                {
                    return false;
                }
                l++; r--;
            }
            return true;
        }

        public bool AlphaNum(char c)
        {
            return (c >= 'A' && c <= 'Z' ||
                    c >= 'a' && c <= 'z' ||
                    c >= '0' && c <= '9');
        }

    }
}
