 
function noBoringZeros(n) {
  if (-10 < n && n < 10) return n;
​
  let digits = String(n).split('');
  if (digits[digits.length - 1] === '0')
    return noBoringZeros(n/10);
  else
    return n;
}