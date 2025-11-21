function well(x){
  const goodFounds = x.filter(word => word === "good").length;
  if (goodFounds === 0) return "Fail!";
  return goodFounds > 2 ? "I smell a series!" : "Publish!";
}