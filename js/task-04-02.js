// Дополни функцию makeMessage так, чтобы она ожидала
// вторым параметром(параметр callback) колбэк - функцию и
// возвращала ее вызов.Функция deliverPizza или makePizza
// будет передаваться как колбэк и ожидать аргументом имя
// готовой доставляемой пиццы.

// Решение
function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Роял гранд', makePizza));
console.log(makeMessage('Ультрасыр', deliverPizza));

// Вызов makeMessage('Роял гранд', makePizza) возвращает строку
// 'Пицца Роял гранд готовится, ожидайте...'.
// Вызов makeMessage('Ультрасыр', deliverPizza) возвращает строку
// 'Доставляем пиццу Ультрасыр.'.
