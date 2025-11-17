function pillars(numPill, dist, width) {
  
  return numPill === 1 ? 0 : ((numPill-2) * width) + (numPill-1)*(dist*100);
}