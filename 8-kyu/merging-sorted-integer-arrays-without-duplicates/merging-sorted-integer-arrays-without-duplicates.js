function mergeArrays(a, b) {
  const arr = [...a,...b].sort((a,b) => a - b);
  return arr.filter((item, index) => arr.indexOf(item) === index );
}
​