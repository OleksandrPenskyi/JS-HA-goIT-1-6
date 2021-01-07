// Задание
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства
// price из объекта который его будет вызывать.

// changePrice(newPrice) - обновляет значение
// свойства price у объекта который его будет вызывать на newPrice.

// Решение
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const newCar = new Car({ brand: 'bmw', model: 'z4', price: 1020 });
console.log(newCar);

console.log(newCar.getPrice());
