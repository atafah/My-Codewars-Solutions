 
function arr2bin(arr){
  let sum = arr.reduce((acc, val) => Number.isInteger(val) || Number.isNaN(val) ? acc + val : acc, 0);
  if (Number.isNaN(sum))
    return 'NaN';
  return sum.toString(2);
}