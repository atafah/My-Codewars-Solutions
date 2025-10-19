function findMultiples(n, limit) {
  return Array.from({length: Math.floor(limit / n)}, (_, ind) => n * (ind + 1));
}
​