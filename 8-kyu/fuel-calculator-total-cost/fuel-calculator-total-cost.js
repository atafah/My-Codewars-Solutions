function fuelPrice(l, lPrice) {
  const discount = Math.floor(l / 2)*5 >= 25 ? 0.25 : Math.floor(l / 2)*5/100;
  return +(l * (lPrice - discount)).toFixed(2);  
}