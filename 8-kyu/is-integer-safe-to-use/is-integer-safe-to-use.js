function SafeInteger(n) {
  if (n > Number.MAX_SAFE_INTEGER) return false;
  return true;
}