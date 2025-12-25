export const isPalindromeNumber = (num) => {
  let flag = Math.abs(num);
  let rev = 0;
  while (flag > 0) {
    const digit = flag % 10;
    rev = rev * 10 + digit;
    flag = Math.floor(flag / 10);
  }

  return rev === num;
};

// console.log(isPalindromeNumber(121) ? "Palindrome" : "Not Palindrome");
// console.log(isPalindromeNumber(444) ? "Palindrome" : "Not Palindrome");
// console.log(isPalindromeNumber(445) ? "Palindrome" : "Not Palindrome");

const isPalindromeString = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (!str[start].match(/[a-z0-9]/i)) {
      start++;
      continue;
    }
    if (!str[end].match(/[a-z0-9]/i)) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

const text = "A man, a plan, a canal: Panama";

console.log(isPalindromeString(text) ? "Palindrome" : "Not Palindrome");
