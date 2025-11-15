 
function initializeNames(name){
  const words = name.split(' ');
  if (words.length <= 2)
    return name;
  const middleWords = words.slice(1,-1).map(word => `${word[0]}.`).join(" ");
  return `${words[0]} ${middleWords} ${words[words.length-1]}`;
}