export function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(`4 is ${isPrime(4) ? "a prime" : "not a prime"}`);
console.log(`3 is ${isPrime(3) ? "a prime" : "not a prime"}`);
