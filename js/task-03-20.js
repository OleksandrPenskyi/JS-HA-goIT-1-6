// Задача. Общая стоимость товара
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

// Решение
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  // Перебираем массив по обьектно
  for (const item of products) {
    // console.log(item);

    //   если в обьекте элемент с именем === имени которое мы задаем в функцию,
    //       то возращаем результат умножения этого товара на цены на кол-во
    if (item.name === productName) {
      return item.price * item.quantity;
    }

    // if (item.name.includes(productName)) {
    //   return item.price * item.quantity;
    // }
  }

  return 0;
  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Радар"));
// Вызов calculateTotalPrice('Радар') возвращает 5200.
