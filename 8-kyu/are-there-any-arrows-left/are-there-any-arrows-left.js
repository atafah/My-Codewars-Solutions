 
function anyArrows(arrows){
  console.log(arrows);
  for (let arrow of arrows){
    if (!('damaged' in arrow) || arrow.damaged === false)
      return true;
  }
  return false;
}