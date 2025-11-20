function numberToPower(number, power){
  console.info(Math.log2(1024));
  var result = 1;
  for (let i = 0; i < power; i++ ){
    result *= number;
  }
  return result;
}