// Функция changeEven(numbers, value) принимает массив чисел
// numbers и обновляет каждый элемент, значение которого это
// чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой -
// не изменяла массив чисел numbers, а создавала,
// наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Пиши код выше этой строки
// }

// Решение
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    // if (numbers[i] % 2 === 0) {
    //   newArr.push(numbers[i] + value);
    // } else {
    //   newArr.push(numbers[i]);
    // }

    //   todo запись тернарного оператора
    newArr.push(numbers[i] % 2 === 0 ? numbers[i] + value : numbers[i]);
  }

  return newArr;
  // Пиши код выше этой строки
}

console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
