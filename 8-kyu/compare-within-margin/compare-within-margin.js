function closeCompare(a, b, margin=0){
  if (margin >= Math.abs(a - b))
    return 0;
  return a < b ? -1 : 1;
}
​