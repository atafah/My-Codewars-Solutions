 
function isOpposite(s1, s2){
  if (s1 === '' || s1.length !== s2.length)
    return false;
  
  for (let i = 0; i < s1.length; i++){
    if (Math.abs(s1.charCodeAt(i) - s2.charCodeAt(i)) !== 32)
      return false;
  }
  return true;
}