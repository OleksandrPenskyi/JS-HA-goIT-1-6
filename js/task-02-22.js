// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// Решение


function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
  // Пиши код выше этой строки
  return numbers;
}