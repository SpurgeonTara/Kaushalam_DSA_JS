const isArmstrong = (n) => {
  const totalDigits = n.toString().length;

  let temp = n;
  let sum = 0;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, totalDigits);
    temp = Math.floor(temp / 10);
  }

  return sum === n;
};

const num = 153;
console.log(
  isArmstrong(num)
    ? `${num} is an Armstrong Number`
    : `${num} is not an Armstrong Number`
);
