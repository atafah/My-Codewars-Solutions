function stringy(size) {
  return Array.from({length: size}, (_, i) => i % 2 ? "0" : "1").join("");
}