 
function onlyOne(...args) {
  const trueCount = args.filter(b => b).length;
  const falseCount = args.filter(b => !b).length;
  return Math.min(trueCount, falseCount) === 1;
}