function cutIt(arr){
  let length = 50;
  
  for (let i =0; i < arr.length; i++){
    if (arr[i].length < length)
      length = arr[i].length; 
  }
  
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].slice(0,length);
  }
  return arr;
  
}