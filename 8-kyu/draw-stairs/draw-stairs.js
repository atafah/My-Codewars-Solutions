function drawStairs(n) {
  let stairs = "";
  for (let i = 1; i < n; i++){
    stairs += "I\n" + " ".repeat(i);
  }
  return stairs += "I";
}