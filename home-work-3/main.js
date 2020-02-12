// 1
var fruit = [
    {name : "lemon", count: 10},
    {name : "apple", count: 12},
    {name : "orange", count: 9},
    {name : "mango", count: 13},
    {name : "lime", count: 7},
];


function getKeyValue(arr, keyValue) {
  return arr.map(function (item) {
      return item.name
  });
}
console.log(getKeyValue(fruit));    // функция должна принимать вторым параметром "назнвание_ключа_объекта"

// 2
var people = [
    {name : "Richard", books: ["Genome", "Island Russia"]},
    {name : "Erlich", books: ["Night Watch", "Labyrinth of Reflections"]},
    {name : "Nelson", books: ["The Stars Are Cold Toys", "A Lord from Planet Earth"]},
    {name : "Bertram", books: ["A Lord from Planet Earth", "Ready Player One"]},
    {name : "Dinesh", books: ["The God Delusion", "A Lord from Planet Earth"]},
];

function getBooks(arr) {
    return arr.reduce(function (acc, person) {
        acc.push(person.books);
        return acc;
    }, []);
}
console.log(getBooks(people));
// сделать так, чтобы в массиве на выходе не было дубликатов