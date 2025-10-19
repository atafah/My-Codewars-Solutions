var countSheep = function (num){
  return num === 0 ? "" : Array.from({length: num}, (val, index) => `${index + 1} sheep...`).join('');          
}