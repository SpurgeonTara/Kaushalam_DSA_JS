import { isPrime } from "../../problems/4-numbers/6-prime-number.js";
import { isPalindromeNumber } from "./7-palindrome.js";

const isPrimePalindrome = (num) => {
  return isPrime(num) && isPalindromeNumber(num);
};

console.log(isPrimePalindrome(2)); // true
console.log(isPrimePalindrome(11)); // true
console.log(isPrimePalindrome(101)); // true
console.log(isPrimePalindrome(22)); // false
