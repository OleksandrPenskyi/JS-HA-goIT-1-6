// Дополни код так, чтобы в переменной allGenres
// был массив всех жанров книг(свойство genres)
// из массива books, а в переменной uniqueGenres
// массив уникальных жанров - без повторений.

// Решение
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения'],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((item, idx, arr) => {
  // ищем индекс каждого элемента в массиве, если возращает тру, то элемент уникальный
  return arr.indexOf(item) === idx;
});

console.log(allGenres);
console.log(uniqueGenres);

// Значение переменной allGenres это массив
// ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы', 'мистика', 'приключения'].

// Значение переменной uniqueGenres это массив
// ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы'].
