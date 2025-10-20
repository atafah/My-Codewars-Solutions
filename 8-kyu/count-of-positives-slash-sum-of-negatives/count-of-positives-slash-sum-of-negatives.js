function countPositivesSumNegatives(arr) {
  if (arr === [] || arr === null || arr.length === 0)
    return [];
  return [arr.filter(a => a > 0).length, arr.filter(a => a < 0).reduce((acc, val) => acc + val)];
}