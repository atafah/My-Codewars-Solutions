 
function rentalCarCost(days) {
  if (days < 3)
    return days * 40;
  if (days < 7)
    return days * 40 - 20;
  return days * 40 - 50;
}