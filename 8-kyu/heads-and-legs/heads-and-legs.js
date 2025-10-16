function animals(heads, legs){
  if (heads === 0 && legs === 0) return [0, 0];
  let cows = 0;
  let chickens = heads;
  
  while (chickens >= 0){
    if (chickens + cows === heads && chickens * 2 + cows * 4 === legs)
      return [chickens, cows];
​
    chickens--;
    cows++;
  }
  return "No solutions";
}