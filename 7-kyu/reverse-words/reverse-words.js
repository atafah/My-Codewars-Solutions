function reverseWords(str) {
  return str.split(' ').map(char => char.split('').reverse().join('')).join(' ');
}