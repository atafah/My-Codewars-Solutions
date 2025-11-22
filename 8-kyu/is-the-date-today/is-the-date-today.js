function isToday(date) {
  if (date.toDateString() === new Date().toDateString())
    return true;
  return false;
}