const sumOfADigit = (num) => {
  let flag = Math.abs(num);
  let sum = 0;

  while (flag > 0) {
    const digit = flag % 10;
    sum += digit;
    flag = Math.floor(flag / 10);
  }

  return sum;
};

console.log(sumOfADigit(123)); // 6
console.log(sumOfADigit(409)); // 13
console.log(sumOfADigit(-256)); // 13
