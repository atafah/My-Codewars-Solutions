 
function nextId(ids){
  let number = 0;
  while (ids.includes(number))
    number++;
  return number;
}