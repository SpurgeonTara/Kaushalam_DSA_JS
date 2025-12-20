import { isPrime } from "./6-prime-number.js";
import { palindromeNumber } from "./7-palindrome-number.js";

function isPrimePalindrome(n) {
  return isPrime(n) && palindromeNumber(n);
}

console.log(isPrimePalindrome(2)); // true
console.log(isPrimePalindrome(11)); // true
console.log(isPrimePalindrome(101)); // true
console.log(isPrimePalindrome(22)); // false
