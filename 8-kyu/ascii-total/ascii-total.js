 
function uniTotal (string) {
  return string.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
}