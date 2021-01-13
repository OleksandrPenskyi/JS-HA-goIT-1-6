// Функция calculateTotalPrice(orderedItems)
// принимает один параметр orderedItems - массив чисел,
// и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и
// возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо
// цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// Решение
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  orderedItems.forEach(function (element) {
    totalPrice += element;
  });

  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
