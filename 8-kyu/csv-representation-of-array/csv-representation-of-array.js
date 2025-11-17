function toCsvText(array) {
   return array.reduce((acc, arr) => acc + arr.join(",") + '\n', '' ).slice(0,-1);
}