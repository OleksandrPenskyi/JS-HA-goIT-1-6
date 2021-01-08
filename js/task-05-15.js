// Выполни рефакторинг класса Car.
// Добавь публичное статическое свойство MAX_PRICE
// со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения
// параметра newPrice.Если оно больше чем MAX_PRICE,
// сеттер ничего не делает, а если меньше или равно,
// то перезаписывает цену автомобиля.

// Решение
class Car {
  // Пиши код ниже этой строки
  // свойсто доступное только для класса Car и не доступно никому из соданных экземпляров
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) {
      return;
    }

    this.#price = newPrice;
  }
  // Пиши код выше этой строки
}

const audi = new Car({ price: 35000 });
console.log(audi);
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
