function factorial(n) {
  // Factorial is not defined for negative numbers
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}

function factorialRecursive(n) {
  // Factorial is not defined for negative numbers
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorialRecursive(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorialRecursive(5)); // 120
console.log(factorial(1)); // 1
