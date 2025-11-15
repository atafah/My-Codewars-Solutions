 
function onlyOne(...tup) {
  const arr = [...tup];
  const trueCount = arr.filter(b => b).length;
  const falseCount = arr.filter(b => !b).length;
  return trueCount === 1 || falseCount === 1;
}