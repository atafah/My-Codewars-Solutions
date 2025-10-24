 
function nextId(ids){
  let number = 0;
  while (number.includes(ids))
    number++;
  return number;
}