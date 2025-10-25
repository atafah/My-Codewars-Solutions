 
function nearestSq(n){
  if (Number.isInteger(Math.sqrt(n)))
    return n;
  let i = 0;
  while (true)
  {
    if ((n-i) > 0 && Number.isInteger(Math.sqrt(n-i)))
      return (n - i);
    if (Number.isInteger(Math.sqrt(n+i)))
      return (n + i);
    i++;
  }
}