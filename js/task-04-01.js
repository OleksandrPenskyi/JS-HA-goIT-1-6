// Дополни код так, чтобы в переменной result был результат
// выполнения функции makePizza, а в переменной pointer была
// ссылка на функцию makePizza.

// Решение
function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza();
const pointer = makePizza;

// Значение переменной result это строка
// 'Ваша пицца готовится, ожидайте.'.

// Значение переменной pointer
// это ссылка на функцию makePizza.
