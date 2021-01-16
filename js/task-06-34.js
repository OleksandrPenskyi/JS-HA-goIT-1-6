// Дополни код так, чтобы в переменной ascendingReleaseDates
// получилась отсортированная по возрастанию копия массива
// releaseDates, а в переменной alphabeticalAuthors копия
// массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// Решение
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(releaseDates);
// Значение переменной releaseDates это массив
// [2016, 1967, 2008, 1984, 1973, 2012, 1997].

console.log(authors);
// Объявлена переменная authors.
// Значение переменной authors это массив
// ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский'].

console.log(ascendingReleaseDates);
// Объявлена переменная ascendingReleaseDates.
// Значение переменной ascendingReleaseDates это массив
// [1967, 1973, 1984, 1997, 2008, 2012, 2016].

console.log(alphabeticalAuthors);
// Объявлена переменная alphabeticalAuthors.
// Значение переменной alphabeticalAuthors это массив
// ['Бернард Корнуэлл', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
