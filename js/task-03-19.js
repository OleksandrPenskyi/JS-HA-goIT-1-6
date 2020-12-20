// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Решение
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const valueArr = [];

  // перебираем массив по обьектам
  for (const item of products) {
    // Делаем массив из ключей каждого обьекта
    // Проверяем эти массивы на наличие свойства, которое передаем в скобках в ф-ю
    if (Object.keys(item).includes(propName)) {
      valueArr.push(item[propName]);
    }
  }

  return valueArr;
  // Пиши код выше этой строки
}

console.log(getAllPropValues("quantity"));
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
