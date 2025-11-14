 
function quadrant(x, y) {
  if (x > 0){
    return y > 0 ? 1 : 4;
  }
  return y > 0 ? 2 : 3;
}