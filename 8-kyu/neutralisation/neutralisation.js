 
function neutralise(s1, s2) {
  let neutralized = [];
  for (let i = 0; i < s1.length; i++){
    if (s1[i] !== s2[i])
      neutralized += '0';
    else
      neutralized += s1[i];
  }
  return neutralized;
}