 
function onlyOne(...args) {
  const trueCount = args.filter(b => b);
  const falseCount = args.filter(b => !b);
  return Math.min(trueCount, falseCount) === 1;
}