const armStrongNumber = (num) => {
  let sum = 0;

  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, num.toString().length);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
};

const num = 143;
console.log(
  armStrongNumber(num)
    ? `${num} is an Armstrong Number`
    : `${num} is not an Armstrong Number`
);
