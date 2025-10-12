String.prototype.toAlternatingCase = function () {
  let str = this.toString();
  let alter = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
      alter += str[i].toLowerCase();
    else if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase())
      alter += str[i].toUpperCase();
    else
      alter += str[i];
  }
  
  return alter;
}