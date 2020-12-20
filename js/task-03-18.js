// Задача. Поиск объекта по значению свойства
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName
// - название продукта.Функция ищет объект продукта с таким именем(свойство name) в
// массиве products и возвращает его цену(свойство price).Если продукт с таким названием не найден,
//     функция должна возвращать null.

// Решение
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getProductPrice(productsName) {
  // Пиши код ниже этой строки
  for (const item of products) {
    if (item.name === productsName) {
      return item.price;
    }
  }

  return null;
  // Пиши код выше этой строки
}

console.log(getProductPrice("Дроид"));
// Вызов getProductPrice('Радар') возвращает 1300.
