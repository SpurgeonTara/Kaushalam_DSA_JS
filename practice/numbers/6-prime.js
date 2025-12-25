export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(`4 is ${isPrime(4) ? "a prime" : "not a prime"}`);
console.log(`1 is ${isPrime(1) ? "a prime" : "not a prime"}`);
