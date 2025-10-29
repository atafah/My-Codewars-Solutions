function factorialBigInt(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}
​
function amIWilson(p) {
  if (p === 1) return false;
  const pBig = BigInt(p);
  const fact = factorialBigInt(p - 1);
  return (fact + 1n) % (pBig * pBig) === 0n;
}