function positiveSum(arr) {
  return arr.reduce((acc, val) => val > 0 ? acc + val : acc, 0);
}