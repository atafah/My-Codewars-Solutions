function sorter(textbooks) {
  textbooks.sort((a, b) => a.localeCompare(b));
  return textbooks;
}