function mergeArrays(arr1, arr2) {
  const newSet = new Set([...arr1, ...arr2]);
  return [...newSet].sort((a, b) => a - b);
}