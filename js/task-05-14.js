// Выполни рефакторинг класса Car.
// Сделай свойства model и price приватными,
// также как #brand.Стандартизируй публичный
// интерфейс класса заменив уже объявленные методы
// на геттеры и сеттеры brand, model и price для
// взаимодействия с приватными свойствами.

// Решение
class Car {
  // Приватные свойства нельзя менять и считывать напрямую, только через метолы, например, гетеры и сетеры
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

const newCar = new Car({ brand: 'bmw', model: 'z4', price: 1020 });
console.log(newCar);

console.log(newCar.brand);
newCar.brand = 'Mercedes';
console.log(newCar.brand);
console.log(newCar);
