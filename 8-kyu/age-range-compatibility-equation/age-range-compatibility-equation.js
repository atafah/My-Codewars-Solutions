function datingRange(age){
  if (age <= 14)
    return `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`;
  return `${Math.floor(age/2 +7)}-${Math.floor(2 * (age - 7))}`;
}