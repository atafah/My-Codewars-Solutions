function remove(str) {  
  while (true){
    if (str[str.length - 1] === "!")
      str = str.slice(0, -1);
    else
      return str;
  }
}