function logicalCalc(array, op){
  const operations = {
    "AND": (x, y) => x && y,
    "OR": (x, y) => x || y,
    "XOR": (x, y) => x ^ y,
  }
​
  return Boolean( array.reduce((acc, val) => operations[op](acc, val)) );
}