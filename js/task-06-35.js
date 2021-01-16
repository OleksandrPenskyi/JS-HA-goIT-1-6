// Онлайн бибилиотеке необходимо отображать книги
// сортированные по дате издания, по её возрастанию
// или убыванию.Дополни код так, чтобы в переменной
// ascendingReleaseDates получилась отсортированная
// по возрастанию копия массива releaseDates,
// а в переменной descendingReleaseDates копия
// отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = releaseDates;

// const descendingReleaseDates = releaseDates;

// Решение
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => {
  return a - b;
});

const descendingReleaseDates = [...releaseDates].sort((a, b) => {
  return b - a;
});

// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
console.log(releaseDates);
// Объявлена переменная ascendingReleaseDates.
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
console.log(ascendingReleaseDates);
// Объявлена переменная descendingReleaseDates.
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967].
console.log(descendingReleaseDates);
