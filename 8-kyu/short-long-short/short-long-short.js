function solution(a, b){
  const long = a.length > b.length ? a : b;
  const short = long === a ? b : a;
  return (short + long + short);
}
​