export const palindromeNumber = (num) => {
  let flag = num;
  let rev = 0;

  while (flag > 0) {
    const digit = flag % 10;
    rev = rev * 10 + digit;
    flag = Math.floor(flag / 10);
  }

  return num === rev;
};

console.log(palindromeNumber(121) ? "Palindrome" : "Not Palindrome");

export const palindromeString = (str) => {
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

console.log(palindromeString(text) ? "Palindrome" : "Not Palindrome");
