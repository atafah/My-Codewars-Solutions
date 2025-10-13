function mergeArrays(arr1, arr2) {
  const set = new Set([...arr1, ...arr2])
  return [...set].sort((a, b) => a - b);
}