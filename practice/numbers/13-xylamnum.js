function isXylemNumber(num) {
  const arr = num.toString().split("");
  let extremesSum = 0;
  let middleSum = 0;
  arr.forEach((it, idx) => {
    if (idx == 0 || idx == arr.length - 1) {
      extremesSum += parseInt(it);
    } else {
      middleSum += parseInt(it);
    }
  });

  if (extremesSum === middleSum) return true;
  else return false;
}

console.log(isXylemNumber(121)); // true
console.log(isXylemNumber(1234)); // true
console.log(isXylemNumber(12321)); // false
