// !Задание 1
// // Напиши функцию - конструктор Account,
// // которая создает объект со свойствами login и email.
// // В prototype функции - конструктора добавь метод getInfo(),
// // который выводит в консоль значения полей
// // login и email объекта который его вызвал.
// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`login: ${this.login}`);
//   console.log(`Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function
// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// !END Задание 1

// !Задание 2
// // Напиши класс User для создания пользователя со следующим свойствами:

// // name - строка
// // age - число
// // followers - число
// // Добавь метод getInfo(), который, выводит строку:
// // User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers
// !END Задание 2

// !Задание 3
// // Напиши класс Storage, который будет создавать
// // объекты для управления складом товаров.
// // При вызове будет получать один аргумент - начальный
// // массив товаров, и записывать его в свойство items.

// // Добавь методы класса:

// // getItems() - возвращает массив текущих товаров
// // addItem(item) - получает новый товар и добавляет его к текущим
// // removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const indexOfArrey = this.items.indexOf(item);
//     this.items.splice(indexOfArrey, 1);
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// !END Задание 3

// !Задание 4
// // Напиши класс StringBuilder.
// // На вход он получает один параметр - строку,
// // которую записывает в свойство _value.

// // Добавь классу следующий функционал:

// // Геттер value - возвращает текущее значение поля _value
// // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = `${this._value}${str}`;
//   }
//   prepend(str) {
//     this._value = `${str}${this._value}`;
//   }
//   pad(str) {
//     this._value = `${str}${this._value}${str}`;
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.value);

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// !END Задание 4

// !Задание 5
// // Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   static getSpecs(car) {
//     console.log(`maxSpeed: ${car.maxSpeed}`);
//     console.log(`speed: ${car.speed}`);
//     console.log(`isOn: ${car.isOn}`);
//     console.log(`distance: ${car.distance}`);
//     console.log(`price: ${car._price}`);
//   }

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */

//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */

//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     let calcSpeed = this.speed + value;
//     if (calcSpeed < this.maxSpeed) {
//       return (this.speed += value);
//     }

//     return 'Ваша скорость превышает предельно допустимую скорость!';
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */

//   decelerate(value) {
//     let calcSpeed = this.speed - value;

//     if (calcSpeed > 0) {
//       return (this.speed -= value);
//     }

//     return 'Не нарушай законы физики! Нельзя сбросить скорость ниже нуля!';
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// console.log(mustang);

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
// !END Задание 5
