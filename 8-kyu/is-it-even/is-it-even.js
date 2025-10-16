function testEven(n) {
  if (Math.floor(n) !== n) return false;
  return n % 2 ? false : true;
}