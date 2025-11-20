function logs(x , a, b){
  return baseX(a, x) + baseX(b, x);
}
​
function baseX(num, x){
  return Math.log(num) /Math.log(x);
}