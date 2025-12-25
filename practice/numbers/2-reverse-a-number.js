const reverseANumber = (num) => {
  let flag = num;
  let rev = 0;

  while (flag > 0) {
    const digit = flag % 10;
    rev = rev * 10 + digit;
    flag = Math.floor(flag / 10);
  }

  return rev;
};

const num = 153;
console.log("Reverse of " + num + ":", reverseANumber(num));
