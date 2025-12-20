function printFibonacci(n) {
  let a = 0,
    b = 1;

  if (n >= 1) console.log(a);
  if (n >= 2) console.log(b);

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

// Example
printFibonacci(6);
