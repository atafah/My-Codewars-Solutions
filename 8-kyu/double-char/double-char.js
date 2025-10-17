function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
  // or
  return str.replace(/./g, "$&$&");
}
​