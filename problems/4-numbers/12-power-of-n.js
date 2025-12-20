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
