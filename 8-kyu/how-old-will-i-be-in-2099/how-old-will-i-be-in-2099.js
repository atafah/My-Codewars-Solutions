function  calculateAge(birth, Year) {  
  if (birth === Year) return "You were born this very year!"
  let d = Math.abs(birth - Year);
  return birth < Year ? `You are ${d} ${d === 1 ? "year":"years"} old.` :
                            `You will be born in ${d} ${d === 1 ? "year":"years"}.`;
}
​
​