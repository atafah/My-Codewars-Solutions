 
function getAverage(marks){
  return Math.floor(marks.reduce((acc, val) => acc + val) / marks.length);
}