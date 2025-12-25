const isSpyNum = (num) => {
  let flag = Math.abs(num);
  let sum = 0;
  let prod = 1;

  while (flag > 0) {
    const digit = flag % 10;
    sum += digit;
    prod *= digit;
    flag = Math.floor(flag / 10);
  }

  return sum === prod;
};

console.log(isSpyNum(1124)); // true
console.log(isSpyNum(123)); // true
console.log(isSpyNum(124)); // false
