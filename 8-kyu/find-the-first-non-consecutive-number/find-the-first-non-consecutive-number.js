function firstNonConsecutive (arr) { 
  const filterd = arr.filter((num, i, arr) => {
    if (i >= 1)
      return num !== arr[i - 1] + 1;
  });
  
  return filterd.length > 0 ? filterd[0] : null;
}