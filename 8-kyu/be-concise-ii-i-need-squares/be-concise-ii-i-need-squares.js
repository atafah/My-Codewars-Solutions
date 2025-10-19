function squaresOnly(arr) {
  return arr.filter((val) => Number.isInteger(Math.sqrt(val)));
}