function sameCase(a, b){
  if (/[^a-zA-Z]/.test(a+b)) return -1;
  if ((/[a-z]/g.test(a) && /[a-z]/g.test(b)) || 
      (/[A-Z]/g.test(a) && /[A-Z]/g.test(b)))
    return 1;
  return 0;
}