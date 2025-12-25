const printFibonacci = (num) => {
  let a = 1;
  let b = 2;

  if (num >= 1) console.log(a);
  if (num >= 2) console.log(b);

  for (let i = 3; i <= num; i++) {
    const next = a + b;
    console.log(next);

    a = b;
    b = next;
  }
};

// printFibonacci(6);
printFibonacci(7);
