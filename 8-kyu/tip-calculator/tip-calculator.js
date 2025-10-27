 
function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "excellent")
    return Math.ceil(amount * 0.2);
  if (rating.toLowerCase() === "great")
    return Math.ceil(amount * 0.15);
  if (rating.toLowerCase() === "good")
    return Math.ceil(amount * 0.1);
  if (rating.toLowerCase() === "poor")
    return Math.ceil(amount * 0.05);
  if (rating.toLowerCase() === "terrible")
    return 0;
  return ("Rating not recognised");
}