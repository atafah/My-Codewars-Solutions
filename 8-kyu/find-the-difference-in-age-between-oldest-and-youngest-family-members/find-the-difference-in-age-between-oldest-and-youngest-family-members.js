function differenceInAges(ages){
  let youngest = ages.reduce((acc, curr) => Math.min(acc,curr));
  let oldest = ages.reduce((acc, curr) => Math.max(acc,curr));
  let differenceAge = oldest - youngest;
  return [youngest, oldest, differenceAge];
}
​