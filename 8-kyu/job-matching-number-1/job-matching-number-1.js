 
function match(candidate, job) {
  if (!("minSalary" in candidate) || !("maxSalary" in job))
    throw new Error("error");
​
  return (candidate.minSalary - candidate.minSalary / 10) <= job.maxSalary;
}