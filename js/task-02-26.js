// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Решение
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const item of order) {
    total += item;
  }

  // Пиши код выше этой строки
  return total;
}
