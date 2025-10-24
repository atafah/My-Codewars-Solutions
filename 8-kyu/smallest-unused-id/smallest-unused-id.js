 
function nextId(ids){
  let arr = [...new Set(ids)].sort((a, b) => a - b);
  if (arr[0] !== 0)
    return 0;
  
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i]+1 !== arr[i+1] || i === arr.length - 1)
      return arr[i]+1;
  }
}