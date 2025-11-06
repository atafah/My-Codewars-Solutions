 
function multiply(number){
  let len = number < 0 ? String(number).length - 1 : String(number).length;
  return number * (5 ** len);
}