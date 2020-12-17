// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// Решение
function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  const newArray = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }

  return newArray;
  // Пиши код выше этой строки
}

const r1 = getEvenNumbers(2, 5);
console.log(r1);
// getEvenNumbers(2, 5) возвращает [2, 4].
