function flickSwitch(arr){
  let bool = true;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "flick")
      bool = !bool;
    arr[i] = bool;
  }
  return arr;
}