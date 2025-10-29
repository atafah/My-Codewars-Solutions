 
function correctPolishLetters (str) {
  const polish = {
                    ą : 'a',
                    ć : 'c',
                    ę : 'e',
                    ł : 'l',
                    ń : 'n',
                    ó : 'o',
                    ś : 's',
                    ź : 'z',
                    ż : 'z'
  };
  
  return str.split('').map(c => c in polish ? polish[c] : c).join('');
  
}