// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// Решение
function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки

  const array = firstArray.concat(secondArray);

  if (array.length >= maxLength) {
    const newArray = array.slice(0, maxLength);
    return newArray;
  }

  // Пиши код выше этой строки
}
