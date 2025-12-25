const fact = (num) => {
  let flag = 1;
  for (let i = num; i > 0; i--) {
    flag *= i;
  }

  return flag;
};

// console.log(fact(4));

const isStrongNum = (num) => {
  let flag = Math.abs(num);
  let sum = 0;
  while (flag > 0) {
    const digit = flag % 10;
    sum += fact(digit);
    flag = Math.floor(flag / 10);
  }

  return sum === num;
};

console.log(isStrongNum(145)); // true
console.log(isStrongNum(123)); // false
console.log(isStrongNum(2)); // true (2! = 2)
