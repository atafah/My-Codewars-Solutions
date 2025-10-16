function isPythagoreanTriple(nums) {
  let [a, b, c] = nums.sort((x,y) => x - y);
  return a**2 + b**2 === c**2;
}