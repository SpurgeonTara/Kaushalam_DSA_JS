# Kaushalam Exam

## Coding Questions
1. Write a Program to reverse a singly linked list without using extra memory

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // store next
    current.next = prev;         // reverse link
    prev = current;              // move prev
    current = nextNode;          // move current
  }

  return prev;
}

```
2. Iterative Binary Search. Given a sorted array, search for a target element and return its index or -1

```js
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target)
      return mid;
    else if (arr[mid] < target)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return -1;
}

// Test
const array = [10, 20, 30, 40, 50];
const target = 40;

const result = binarySearch(array, target);

console.log(
  result !== -1
    ? `Element found at index ${result}`
    : "Element not found"
);


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

```


3. Chack If a string is palindrome. Ihgnore case and non-alpha numeric characters

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {

    if (!str[left].match(/[a-z0-9]/i)) {
      left++;
      continue;
    }

    if (!str[right].match(/[a-z0-9]/i)) {
      right--;
      continue;
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Test
const text = "A man, a plan, a canal: Panama";

console.log(isPalindrome(text) ? "Palindrome" : "Not Palindrome");

```

4. Find the Missing Number in Array contains numbers 1 to n. But one number is missing
```js
function findMissingNumber(arr, n) {
  // Expected sum of 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Actual sum of array elements
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  // Missing number
  return expectedSum - actualSum;
}

// Example usage
const array = [1, 2, 4, 5];
const n = 5;

console.log("Missing Number:", findMissingNumber(array, n));
```
5. Print Fibonacci Series up to N terms
```js
function printFibonacci(n) {
  let a = 0, b = 1;

  if (n >= 1) console.log(a);
  if (n >= 2) console.log(b);

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

// Example
printFibonacci(6);

```
6. Count Number of Vowels in a string
```js
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      count++;
    }
  }
  return count;
}

// Example
const text = "Hello World";
console.log("Number of vowels:", countVowels(text));

```
7. Check If a number is  Armstrong Number

```js
function isArmstrong(n) {
  const digits = n.toString().length;
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === n;
}

// Example
const num = 153;
console.log(
  isArmstrong(num)
    ? `${num} is an Armstrong Number`
    : `${num} is not an Armstrong Number`
);

```
8. Find Factorial of a number(iterative)
```js
function factorial(n) {
  // Factorial is not defined for negative numbers
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}


function factorialRecursive(n) {
  // Factorial is not defined for negative numbers
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorialRecursive(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorialRecursive(5)); // 1
console.log(factorial(1)); // 1


```
9. Reverse a number without using string functions

```js
function reverseNumber(n) {
  let rev = 0;

  while (n > 0) {
    let digit = n % 10;          // get last digit
    rev = rev * 10 + digit;      // build reversed number
    n = Math.floor(n / 10);      // remove last digit
  }

  return rev;
}
```

10. Program to check prime numbers

```js
function isPrime(n) {
  // Step 1: Handle edge cases
  if (n <= 1) {
    return false;
  }

  if(n == 2) {
    return true;
  }

  if(n % 2 === 0) {
    return false
  }

  // Step 2: Check divisibility up to square root
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false; // Not prime
    }
  }

  // Step 3: Prime number
  return true;
}


console.log(isPrime(2));  // true
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false
```

11. Find GCD of two numbers
```js
function gcd(a, b) {
  // Handle negative numbers
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(gcd(12, 18)); // 6
console.log(gcd(48, 18)); // 6
console.log(gcd(7, 13)); // 1
console.log(gcd(0, 5)); // 5

```
12. Remove Duplicates from an array
```js
function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}

  // Output: [1, 2, 3, 4, 5]
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  console.log(removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5]));
```
13. Find Max and Min in an array
```js
function findMinMax(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { min, max };
}

const numbers = [3, 7, 2, 9, 4];

const result = findMinMax(numbers);
console.log("Min:", result.min);
console.log("Max:", result.max);

```
14. Rotate Array by K positions

```js
function rotateArrayRight(arr, k) {
  const n = arr.length;

  if (n === 0) return arr;

  k = k % n;

  const rightPart = arr.slice(n - k);
  const leftPart = arr.slice(0, n - k);

  return [...rightPart, ...leftPart];
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateArrayRight(arr, 2));
```
15. Merge Two Sorted ARrays into One SOrted ARray

```js
function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  // Compare elements from both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
console.log(
  mergeSortedArrays([1, 3, 5], [2, 4, 6])
);
// Output: [1, 2, 3, 4, 5, 6]
```
16. Count Frequency of each element in ARray
```js
function countFrequency(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (frequency[element] !== undefined) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  return frequency;
}


const arr = [1, 2, 2, 3, 1, 4, 2];
console.log(countFrequency(arr));
```

17. Second Largest elements without sorting
```js
function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return "No second largest element found";
  }

  return secondLargest;
}

console.log(secondLargest([10, 5, 20, 8]));      // 10
console.log(secondLargest([10, 20, 20, 8]));    // 10
console.log(secondLargest([5, 5, 5]));  
```

18. Sort an array using bubble sort

```js
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Flag to detect any swap
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // If no swaps happened, array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
```
19. Chck Anagram Strings

```js
function isAnagram(str1, str2) {
  // Step 1: Length check
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 2: Normalize case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let frequency = {};

  // Step 3: Count characters from first string
  for (let char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Step 4: Reduce count using second string
  for (let char of str2) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("race", "care"));     // true
console.log(isAnagram("hello", "world"));   // false
```
20. Find Sum of Digits of a Number
```js
function sumOfDigits(n) {
  n = Math.abs(n); // Handle negative numbers
  let sum = 0;

  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumOfDigits(123));  // 6
console.log(sumOfDigits(409));  // 13
console.log(sumOfDigits(-256)); // 13
```

21. Program to find x^n without using pow
```js
function power(x, n) {
  if (n < 0) {
    return "Negative power not supported";
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81
```
22. Check whether linked list contains a cycle
```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function hasCycle(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;          // move 1 step
    fast = fast.next.next;     // move 2 steps

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle
}


// Create nodes
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);

// Link nodes
head.next = second;
second.next = third;
third.next = fourth;

// Create cycle
fourth.next = second;

console.log(hasCycle(head)); // true

```
23. Find Middle element of a linked list
```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head) {
  if (head === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;        // move 1 step
    fast = fast.next.next;   // move 2 steps
  }

  return slow; // middle node
}


let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);
head.next.next.next.next = new ListNode(50);

const middle = findMiddle(head);
console.log(middle.value); // 30

```
24. Print Pattern Programs
```js
// Square
function squarePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "*";
    }
    console.log(row);
  }
}
/*
*****
*****
*****
*****
*****
*/
// -----------------------------------------------
// Right Angled Triangle
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
/*
*
**
***
****
*****
*/
// -----------------------------------------------------
// Inverted Right-Angled Triangle
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

/* 
*****
****
***
**
*
*/
// --------------------------------------------------------------------

// Pyramid Pattern
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Spaces
    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }

    // Stars
    for (let star = 1; star <= 2 * i - 1; star++) {
      row += "*";
    }

    console.log(row);
  }
}

/* 
    *
   ***
  *****
 *******
*********
*/
```
25. Check If a number is perfect numbers
```js
function isPerfectNumber(n) {
  if (n <= 1) {
    return false;
  }

  let sum = 1;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;

      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum === n;
}


console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(1));   // false

```
26. Spy Number
```js
/* 
  A Spy Number is a number where:

Sum of its digits = Product of its digits

Examples
✅ Example: 1124

Digits: 1, 1, 2, 4

Sum = 1 + 1 + 2 + 4 = 8

Product = 1 × 1 × 2 × 4 = 8
✔ 1124 is a Spy Number

❌ Example: 123

Sum = 1 + 2 + 3 = 6

Product = 1 × 2 × 3 = 6
✔ Actually 123 is also a Spy Number

❌ Example: 124

Sum = 1 + 2 + 4 = 7

Product = 8
✖ Not a Spy Number

📌 Important Note

Digits are processed individually

No string conversion is required (pure math approach)
*/
function isSpyNumber(n) {
  n = Math.abs(n); // Handle negative numbers

  let sum = 0;
  let product = 1;

  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    product *= digit;
    n = Math.floor(n / 10);
  }

  return sum === product;
}

console.log(isSpyNumber(1124)); // true
console.log(isSpyNumber(123));  // true
console.log(isSpyNumber(124));  // false

```

28. STrong Numbers
```js
/* 
1! = 1
4! = 24
5! = 120

Sum = 1 + 24 + 120 = 145
*/

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isStrongNumber(n) {
  let original = n;
  let sum = 0;

  while (n > 0) {
    let digit = n % 10;
    sum += factorial(digit);
    n = Math.floor(n / 10);
  }

  return sum === original;
}

console.log(isStrongNumber(145)); // true
console.log(isStrongNumber(123)); // false
console.log(isStrongNumber(2));   // true (2! = 2)

```
29. Xylem number
```js
/* 
A Xylem Number is a number in which:

Sum of the first and last digits
= Sum of the remaining (middle) digits

Important Terminology

Extreme digits → first & last digit

Mean digits → digits between them


2️⃣ Examples
✅ Example 1: 121

First digit = 1

Last digit = 1

Mean digit = 2

Extreme sum = 1 + 1 = 2
Mean sum = 2


✔ 121 is a Xylem Number

✅ Example 2: 12321

Extreme digits: 1 + 1 = 2

Mean digits: 2 + 3 + 2 = 7

✖ Not a Xylem Number

❌ Example 3: 1234

Extreme sum = 1 + 4 = 5

Mean sum = 2 + 3 = 5

✔ 1234 is a Xylem Number
*/

function isXylemNumber(num) {
    const arr = num.toString().split("");
    let extremesSum = 0;
    let middleSum = 0;
    arr.forEach((it, idx) => {
        if(idx == 0 || idx == arr.length - 1) {
            extremesSum += parseInt(it)
        } else {
            middleSum += parseInt(it)
        }
    })

    if(extremesSum === middleSum) return true
    else return false
}


console.log(isXylemNumber(121));   // true
console.log(isXylemNumber(1234)); // true
console.log(isXylemNumber(12321));// false

```
30. Prime Palindrome
```js
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(n) {
  let original = n;
  let reverse = 0;

  while (n > 0) {
    reverse = reverse * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return reverse === original;
}

function isPrimePalindrome(n) {
  return isPrime(n) && isPalindrome(n);
}


console.log(isPrimePalindrome(2));   // true
console.log(isPrimePalindrome(11));  // true
console.log(isPrimePalindrome(101)); // true
console.log(isPrimePalindrome(22));  // false
```

# SQL Questions
1. Find Second Highest Salary
```sql
SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);
```

2. Find Nth Highest Salary
```sql
SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET N-1;
```

3. Display Employee Count department Wise
```sql
SELECT department, COUNT(*) FROM employees GROUP BY department;
```

4. Find Duplicate Records
```sql
SELECT name, salary COUNT(*) FROM employees GROUP BY name, salary HAVING COUNT(*) > 1;
```

5. Retrieve Employees with Salary Greater Than Average
```sql
SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);
```

6. Get Highest Salary in Each Department
```sql
SELECT department, MAX(salary) FROM employees GROUP BY department; 
```

7. Write a query to fetch employees who joined in last 30 days
```sql
SELECT * FROM employees WHERE join_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY);
```

8. Find EMployees WHose name starts with 'A'
```sql
SELECT * FROM employees WHERE name LIKE 'A%'
```

9. Find Total Salary of each Department
```sql
SELECT department, SUM(salary) FROM employees GROUP BY department;
```

10. Display Top 3 Salaries
```sql
SELECT DISTINCT salary FROM employees ORDER BY salary LIMIT 3;
```