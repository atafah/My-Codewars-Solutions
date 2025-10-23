function points(games) {
  return (games.map(game => {
    const points = game.split(":");
    if (points[0] > points[1]) return 3;
    if (points[0] < points[1]) return 0;
    return 1;
  }).reduce((acc, val) => acc + val));
}