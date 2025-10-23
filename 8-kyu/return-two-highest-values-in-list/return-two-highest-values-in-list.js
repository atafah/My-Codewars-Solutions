function twoHighest(arr) {
  if (arr.length <= 1) return arr;
  return [...new Set(arr)].sort((a, b) => a - b).slice(-2).reverse();
}