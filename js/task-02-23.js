// Фильтрация массива чисел
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// Решение
function filterArray(numbers, value) {
  // Пиши код ниже этой строки

const newArray = [];

    for (let i = 0; i < numbers.length; i += 1){
        if (numbers[i] > value) {
            newArray.push(numbers[i]);
        }
    }

    return newArray;

  // Пиши код выше этой строки
}