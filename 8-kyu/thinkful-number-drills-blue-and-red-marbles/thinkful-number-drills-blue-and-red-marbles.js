function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const totalBallsLeft = blueStart + redStart -(bluePulled + redPulled);
  const blueRemaining = blueStart - bluePulled;
  return blueRemaining / totalBallsLeft;
}