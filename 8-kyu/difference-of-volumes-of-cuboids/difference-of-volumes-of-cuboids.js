function findDifference(a, b) {
  return Math.abs(a.reduce((acc, x) => acc * x) - b.reduce((acc, x) => acc * x));
}