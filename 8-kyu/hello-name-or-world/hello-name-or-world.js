function hello(name="World") {
  if (!name) name = "World";
  return `Hello, ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`;;
}