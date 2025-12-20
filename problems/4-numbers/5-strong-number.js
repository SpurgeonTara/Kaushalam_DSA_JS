function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const isStrongNum = (num) => {
  let flag = Math.abs(num);

  let sum = 0;

  while (flag > 0) {
    const digit = flag % 10;
    sum += factorial(digit);
    flag = Math.floor(flag / 10);
  }

  return sum === num;
};

console.log(isStrongNum(145)); // true
console.log(isStrongNum(123)); // false
console.log(isStrongNum(2)); // true (2! = 2)
