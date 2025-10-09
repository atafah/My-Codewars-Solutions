const array = str => {
  const arr = str.split(',');
  const new_arr = arr.filter((_, index) => index !== 0 && index != arr.length - 1).join(" ");
  return new_arr === '' ? null : new_arr;
}