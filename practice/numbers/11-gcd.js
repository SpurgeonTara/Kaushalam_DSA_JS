const gcd = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);

  while (b !== 0) {
    const rem = a % b;
    a = b;
    b = rem;
  }

  return a;
};

// console.log(gcd(12, 18)); // 6
// console.log(gcd(48, 18)); // 6
// console.log(gcd(7, 13)); // 1
// console.log(gcd(0, 5)); // 5

const gcdOfArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);

    if (result === 1) {
      return 1;
    }
  }

  return result;
};

console.log(gcdOfArray([12, 18])); // 6
console.log(gcdOfArray([48, 18])); // 6
console.log(gcdOfArray([7, 13])); // 1
console.log(gcdOfArray([0, 5])); // 5
console.log(gcdOfArray([24, 36])); // 12

console.log(gcdOfArray([12, 18, 24])); // 6
console.log(gcdOfArray([15, 25, 35])); // 5
console.log(gcdOfArray([14, 28, 42])); // 14
console.log(gcdOfArray([7, 13, 19])); // 1
console.log(gcdOfArray([0, 0, 5])); // 5

console.log(gcdOfArray([12, 18, 24, 30])); // 6
console.log(gcdOfArray([20, 40, 60, 80])); // 20
console.log(gcdOfArray([9, 27, 81, 45])); // 9
console.log(gcdOfArray([6, 10, 15, 25])); // 1
console.log(gcdOfArray([0, 12, 24, 36])); // 12
