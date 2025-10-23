function isVow(arr){
  return arr.map(num => {
  const ascii = String.fromCharCode(num);
  if ('aeiou'.includes(ascii))
    return ascii;
  return num;
  });
}