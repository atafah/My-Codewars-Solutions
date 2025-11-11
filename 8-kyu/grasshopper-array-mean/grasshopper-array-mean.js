 
function findAverage(nums) {
  return nums.reduce((acc, x) => acc + x) / nums.length;
}