function basicOp(op, value1, value2){
  const operation = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return operation[op];
}