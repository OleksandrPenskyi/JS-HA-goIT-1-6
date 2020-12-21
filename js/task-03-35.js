// Задание
// Дополни метод updateBook(oldName, newName) так,
//     чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива,
//     и splice() для того чтобы заменить этот элемент.

// Решение
const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    //   Ищем индекс под которым находится нужная нам  старая книга
    let findIndex = this.books.indexOf(oldName);
    //   удаляем старую книгу с массива books на новую книгу newName
    this.books.splice(findIndex, 1, newName);
    // console.log(findIndex);

    // Пиши код выше этой строки
  },
};

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.books);
// После вызова метода bookShelf.updateBook('Мгла', 'Хроники подземелий'),
//     значение свойства books это массив['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));
console.log(bookShelf.books);

// После вызова метода bookShelf.updateBook('Последнее королевство', 'Дюна'),
//     значение свойства books это массив['Дюна', 'Мгла', 'Страж снов'].
