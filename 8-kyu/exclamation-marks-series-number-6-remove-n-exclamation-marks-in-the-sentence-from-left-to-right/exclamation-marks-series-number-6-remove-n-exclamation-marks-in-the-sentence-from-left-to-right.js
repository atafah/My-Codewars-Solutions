 
function remove(str,n){
  let newStr = "";
  
  for (let i = 0; i < str.length; i++){
    if (str[i] !== '!' || (str[i] === '!' && n == 0))
      newStr += str[i];
    else if (str[i] === '!' && n > 0)
      n--;
  }
  return newStr;  
}