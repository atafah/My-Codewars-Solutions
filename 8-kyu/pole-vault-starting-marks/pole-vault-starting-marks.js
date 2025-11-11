 
function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m 6.217
  //           Body height of 1.83 m --> starting mark: 10.67 m 5.83
  // m = (y - y1) / (x - x1)
  // y = y1 + m(x - x1)
  let mark = 9.45 + (1.22/0.31) * (bodyHeight - 1.52);
  return parseFloat(mark.toFixed(2));
}