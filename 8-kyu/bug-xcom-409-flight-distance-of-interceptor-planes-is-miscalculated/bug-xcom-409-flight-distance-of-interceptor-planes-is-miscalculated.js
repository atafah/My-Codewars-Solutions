function travelDistance(avgSpeed, travelTime) {
  // no need for those 
  const KM_PER_MILE = 1.609344;
  const travelHours = travelTime / 60;
  const travelMiles = avgSpeed * travelHours;
  const travelKms   = travelMiles / KM_PER_MILE;
  
  // just return this
  return travelTime / 60 * avgSpeed * 1.852;
}
​