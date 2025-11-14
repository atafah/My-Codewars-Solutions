 
function elevator(left, right, me){
  const leftDis = Math.abs(me - left);
  const rightDis = Math.abs(me - right);
  
  if (rightDis <= leftDis)
    return "right";
  else
    return "left";
}