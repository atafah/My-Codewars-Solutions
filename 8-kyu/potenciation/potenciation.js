 
function power(x,y){
  if ((x === 0 && y === 0) || y === 0)
    return 1;
  let product = x;
  while (y >= 2){
    product *= x;
    y--;
  }
  return product;
}