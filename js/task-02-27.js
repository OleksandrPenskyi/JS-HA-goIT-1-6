// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Решение
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const item of numbers) {
    if (item > value) {
      filteredNumbers.push(item);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}

const r1 = filterArray([1, 2, 3, 4, 5], 3);
console.log(r1);
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
