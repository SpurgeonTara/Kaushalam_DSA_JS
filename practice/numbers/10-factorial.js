const fact = (num) => {
  let flag = 1;
  for (let i = num; i > 0; i--) {
    flag *= i;
  }

  return flag;
};

// console.log(fact(5));

function factRecursive(num) {
  if (num < 0) {
    throw new Error("Cant calculate factorial for negative numbers");
  }
  if (num === 1) {
    return 1;
  }

  if (num === 2) {
    return 2;
  }

  return num * factRecursive(num - 1);
}

console.log(factRecursive(5));
