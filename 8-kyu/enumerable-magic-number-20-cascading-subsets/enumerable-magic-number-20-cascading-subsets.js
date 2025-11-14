function eachCons(array, n) {
  let subset = [];
  for (let i = 0; i <=  array.length - n; i++){
    subset.push(array.slice(i, i + n))
  }
  return subset;
}