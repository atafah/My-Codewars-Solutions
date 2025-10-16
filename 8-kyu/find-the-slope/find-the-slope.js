function slope(points)
{
 let [x1,y1,x2,y2] = points;
  return x2-x1 === 0 ? "undefined" : String((y2 - y1)/(x2 - x1));
}