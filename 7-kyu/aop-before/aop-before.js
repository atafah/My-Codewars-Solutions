 
function adviseBefore(target, advice) {
 
  return function(...args){
    const result = advice(...args);
    
    const finalArgs = Array.isArray(result) ? result : args;
    
    return target(...finalArgs);
  }
}