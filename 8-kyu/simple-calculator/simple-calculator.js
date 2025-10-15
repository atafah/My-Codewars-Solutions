function calculator(a, b, sign){
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";
  
  const operations = {
    "+": (x, y) => x + y,
    "*": (x, y) => x * y,
    "-": (x, y) => x - y,
    "/": (x, y) => x / y,
  }
    
  return operations[sign] ? operations[sign](a, b) : "unknown value";
}