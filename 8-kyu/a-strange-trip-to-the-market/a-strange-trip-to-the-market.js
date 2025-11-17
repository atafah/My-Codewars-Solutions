function isLochNessMonster(s) {
  const arr = s.split(" ");
  return /tree fiddy|three fifty|3\.50/i.test(s);
}