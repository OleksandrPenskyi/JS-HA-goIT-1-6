// Функция includes()
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Решение
function includes(array, value) {
  // Пиши код ниже этой строки
  let findNumber;

  for (const item of array) {
    if (item === value) {
      findNumber = true;
      break;
    } else {
      findNumber = false;
    }
  }

  return findNumber;
  // Пиши код выше этой строки
}

const r1 = includes([1, 2, 3, 4, 5], 11);
console.log(r1);
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
