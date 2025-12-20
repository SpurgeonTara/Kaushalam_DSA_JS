function gcd(a, b) {
  // Handle negative numbers
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(gcd(12, 18)); // 6
console.log(gcd(48, 18)); // 6
console.log(gcd(7, 13)); // 1
console.log(gcd(0, 5)); // 5
