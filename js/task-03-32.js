// Задание
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
//     чтобы она считала сумму только тех аргументов,
//     которые больше чем заданное число.Это число должно быть первым параметром функции.

// Решение
// Пиши код ниже этой строки
function addOverNum(fistElemenet, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > fistElemenet) {
      total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}

console.log(addOverNum(50, 15, 27));
// Вызов addOverNum(50, 15, 27) возвращает 0.

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71.
