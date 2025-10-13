function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  const startUTC = start - tz_from;
  const arrivalUTC = startUTC + duration;
  const arrivalLocal = arrivalUTC + tz_to;
  return arrivalLocal < 0;
}
​