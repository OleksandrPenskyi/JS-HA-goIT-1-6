// Задание
// Выполни рефакторинг функции - конструктора Car так,
// чтобы она принимала один параметр - объект со свойсвами
// brand, model и price.Деструктуризируй объект
// в сигнатуре(подписи) функции.

// Решение
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi);
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
