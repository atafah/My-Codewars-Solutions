function sumSquares(array) {
  return array.map(x => x*x).reduce((acc, y) => acc + y);
}