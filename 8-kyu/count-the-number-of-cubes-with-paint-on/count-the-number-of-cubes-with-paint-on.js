function countSquares(n){
  if (n === 0) return 1;
  return (n+1)**3 - (n-1)**3;
}