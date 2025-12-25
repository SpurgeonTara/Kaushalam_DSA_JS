const powerOfN = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

console.log(powerOfN(2, 3)); // 8
console.log(powerOfN(5, 0)); // 1
console.log(powerOfN(3, 4)); // 81
