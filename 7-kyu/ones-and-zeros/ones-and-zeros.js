 
const binaryArrayToNumber = arr => {
  return parseInt(arr.map(val=>String(val)).join('') , 2);
};