function fixTheMeerkat(arr) {
  let temporary = arr[0];
  arr[0] = arr[2];
  arr[2] = temporary;
  return arr;
}