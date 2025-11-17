function validateUsr(username) {
  // ^ start of string
  // $ end of string
  // [a-z0-9_] allowed characters: lowercase character, digits, underscore
  //{4,16} length between 4 and 16
  
  const regex = /^[a-z0-9_]{4,16}$/;
  return regex.test(username);
}