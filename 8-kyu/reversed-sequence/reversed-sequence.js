const reverseSeq = n => {
  return Array.from({length: n}, (val, i) => n-i);
};