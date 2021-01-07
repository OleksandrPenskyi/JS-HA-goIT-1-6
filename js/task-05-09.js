// Выполни рефакторинг кода, заменив
// функцию - конструктор Car на класс с
// методом - конструктором, принимающим объект.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const newCar = new Car({ brand: 'bmw', model: 'z4', price: 1020 });
console.log(newCar);
