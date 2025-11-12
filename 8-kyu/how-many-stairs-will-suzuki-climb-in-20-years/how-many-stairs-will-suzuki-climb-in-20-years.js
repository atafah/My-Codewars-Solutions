 
function stairsIn20(s){
  let sum = 0;
  for (let i = 0; i < 7; i++){
    sum += s[i].reduce((acc, x) => acc + x);
  }
  return sum * 20;
}