function include(arr, item){
  return arr.includes(item);
  // or
  return arr.filter(x => x === item).length >= 1;
}