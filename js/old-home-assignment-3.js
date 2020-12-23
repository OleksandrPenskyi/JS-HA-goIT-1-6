// !Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:
// значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';

// let keys = Object.keys(user); // тут получается массив ключей обьекта
// console.log(keys);

// for (const item of keys) {
//   console.log(typeof item); // string
//   console.log(`${item} : ${user[item]}`);
// }
// !END Задание 1

// !Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

// const countProps = function (obj) {
// // создаем массив ключей с обьекта
//   let objToArray = Object.keys(obj);

// // считаем длину массива с ключами - т.е. количество свойств массива
//   let arrayLength = objToArray.length;
//   return arrayLength;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
// !END Задание 2

// !Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в
// формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   // Собираем массив из ключей
//   const employeeArr = Object.keys(employees);

//   // Собираем массив из значений
//   const ratingArr = Object.values(employees);

//   // Предположим, наибольшее число у элемента массива valuesArr с нулевым индексом
//   let theBiggestNumber = ratingArr[0];

//   // Предположим, лучший сотрудник это элемент массива keysArr с нулевым индексом
//   let theBetterEmployee = employeeArr[0];

//   // перебираем массив с оценками - ratingArr
//   // начинаем с первого элемента массива, ибо нулевой якобы самый большой
//   // Потому сравниваем нулевой (theBiggestNumber) с остальными элементами
//   for (let i = 1; i < ratingArr.length; i += 1) {
//     //  Если 0 - й элемент меньше 1 - го, то theBiggestNumber присваиваем значение 1 - го элемента.
//     //  Теперь 1 - й элемент у нас самый большой.
//     //  На 2-й итерации сравниваем новое большее число со следующим числом массива и т.д.
//     if (ratingArr[0] < ratingArr[i]) {
//       // true - наибольшее число становится элемент с индексом i
//       theBiggestNumber = ratingArr[i];
//       // true - и лучшим сотрудником становится соттрудник с этим же элементом i
//       theBetterEmployee = employeeArr[i];
//     }
//   }
//   return theBetterEmployee;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
// !END Задание 3

// !Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   let total = 0;

//   // Создаем массив из аргументов, которые принимает функция
//   const salaryArr = Object.values(employees);

//   // Перебираем массив и суммируем элементы
//   for (const item of salaryArr) {
//     total += item;
//   }

//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// // console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
// !END Задание 4

// !Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   // Создаем пустой массив для наполнения его инфой
//   const newArray = [];

//   // перебираем входящий массив обьектов
//   for (let i = 0; i < arr.length; i += 1) {
//     //   если i-ый обьект массива содержит имя свойства,
//     // которое приходит из аргумента функции,
//     // то значения этих обьектов массива пушим в новый массив - newArray

//     // елси имя свойства 'category' нет в обьекте,
//     // то нчиего не пушиться в массив, иначе напушиться 4 undefined элемента
//     if (arr[i][prop]) {
//       newArray.push(arr[i][prop]);
//     }
//   }

//   return newArray;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// !END Задание 5

// !Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total = 0;

//   // перебираем массив обьектов
//   for (const item of allProdcuts) {
//     //   если в элементе массива (одном из обьектов) значение
//     // свойства "name" равняется искомому значению - productName
//     //   то делаем расчет в том же обьекте со знаением его свойств
//     if (item.name === productName) {
//       total = item.price * item.quantity;
//     }
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
// !END Задание 6

// !Задание 7
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransaction = {
      quantity: amount,
      transactionType: type,
    };
    console.log(newTransaction);
    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    createTransaction(amount, type);

    this.balance += this.createTransaction.quantity;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

account.createTransaction(1000, Transaction.DEPOSIT);
// account.deposit(50);
// !END Задание 7

console.log(account.balance);
