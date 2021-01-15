// Задача. Общие элементы
// Задание
// Функция getCommonElements(firstArray, secondArray)
// принимает два массива произвольной длины в параметры
// firstArray и secondArray, и возвращает новый массив
// их общих элементов, то есть тех которые есть в обоих массивах.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }

//     return commonElements;
//     // Пиши код выше этой строки
//   }

// Выполни рефакторинг функции так, чтобы вместо цикла
// for она использовала метод forEach.

// Решение
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(itemFirstArr => {
    if (secondArray.includes(itemFirstArr)) {
      commonElements.push(itemFirstArr);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
