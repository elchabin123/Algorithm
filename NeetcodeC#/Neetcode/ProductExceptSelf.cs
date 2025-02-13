using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neetcode
{
    public class ProductExceptSelf
    {
        // loop 
        public static int[] ProductExceptSelf1(int[] nums)
        {
            int n = nums.Length;
            int[] result = new int[n];

            for (int i = 0; i < n; i++)
            {
                int prod = 1;
                for (int j = 0; j < n; j++)
                {
                    if (j != i)
                    {
                        prod *= nums[j];
                    }
                }
                result[i] = prod;
            }
            return result;
        }
        // prefix and suffix
        public static int[] ProductExceptSelf2(int[] nums)
        {
            int n = nums.Length;
            int[] res = new int[n];
            int[] pref = new int[n];
            int[] suff = new int[n];

            pref[0] = 1;
            suff[n - 1] = 1;

            for (int i = 1; i < n; i++)
            {
                pref[i] = nums[i - 1] * pref[i - 1];
            }
            for (int i = n - 2; i >= 0; i--)
            {
                suff[i] = nums[i + 1] * suff[i + 1];
            }
            for (int i = 0; i < n; i++)
            {
                res[i] = pref[i] * suff[i];
            }
            return res;
        }
    }
}
