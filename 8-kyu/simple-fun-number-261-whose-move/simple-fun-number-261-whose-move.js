 
function whoseMove(lastPlayer, win) {
  const nextPlayer = {white: "black", black: "white"};
  return win ? lastPlayer : nextPlayer[lastPlayer]; 
}