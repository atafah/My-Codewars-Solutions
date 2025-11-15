 
function isDigit(s) {
  let len = s.split(" ").length;
  if (len > 1) return false;
  if (s.length === 0 || Number.isNaN(Number(s)))
    return false;
  return true;
}