function sumArray(array) {
  if (!array || array.length < 2 || array === null) return 0;
  
  let sum = array.sort((a, b) => a - b).reduce((acc, val) => acc + val);
  return sum - array[0] - array[array.length - 1];
}