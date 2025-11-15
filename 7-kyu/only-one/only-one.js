 
function onlyOne(...args) {
  const trueCount = args.filter(b => b).length;
  const falseCount = args.filter(b => !b).length;
  return trueCount === 1;
}