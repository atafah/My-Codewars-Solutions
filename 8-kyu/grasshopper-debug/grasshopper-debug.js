function weatherInfo (f) {
  const c = convertToCelsius(f)
  if (c < 0)
    return (c + " is freezing temperature");
  return (c + " is above freezing temperature");
}
​
function convertToCelsius(f) {
  var c = (f - 32) * (5/9);
  return c;
}