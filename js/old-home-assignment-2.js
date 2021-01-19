// !Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение
// в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Решение
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`Индекс ${i} - элемент #${i + 1}-${array[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// !END Задание 1

// !Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
// calculateEngravingPrice(message, pricePerWord) принимающую строку
// (в строке будут только слова и пробелы) и цену гравировки одного слова,
// и возвращающую цену гравировки всех слов в строке.
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const newArr = message.split(' ').length * pricePerWord;
//   return newArr;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120
// !END Задание 2

// !Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную
//  строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   const newArr = string.split(' ');
//   let theLongestWord = newArr[0];

//   for (let i = 1; i < newArr.length; i += 1) {
//     if (theLongestWord.length < newArr[i].length) {
//       theLongestWord = newArr[i];
//     }
//   }

//   return theLongestWord;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'
// !END Задание 3

// !Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и
// добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + '...';
//   }

//   return string;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка
// !END Задание 4

// !Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то
// функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
// Создали массив из аргументов функции
//   newArr = message.toLowerCase().split(' ');

//   перебираем каждый массив и каждую элемент массива проверяем на наличие слов spam и sale.
//   Делаем через перебор, ибо одно из слов у нас приходит во вложенном массиве, до которого без перебора не достучаться
//   for (let i = 0; i < newArr.length; i += 1) {
//     if (newArr[i].includes('spam') || newArr[i].includes('sale')) {
//       return true;
//     }
//   }
//   return false;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How sale to earn fast money?')); // true
// !END Задание 5

// !Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку
// 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор
// символов, не обязательно. Если хочешь, в случае некорректного ввода,
// показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно, после чего снова
// пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// while (true) {
// пользователь пишет числа, но это строки
//   input = prompt('Введите число');

//   Если пользователь ввел "Отмена", то прерывается цикл
//   if (input == null) {
//     alert('Пользователь отменил ввод чисел');
//     break;
//   }

// Преобразовуем input нашего пользователя в число.
// Если пользователь ввел не число, то получится NaN. JS не преобразует не число в число.
//   const itemOfArray = Number(input);

//   Если пользователь ввел "не число" - NaN, то пропускаем эту итерацию.
//   Делаем проверку на NaN
//   if (Number.isNaN(itemOfArray)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

// Если полученный input прошел проверку начисло и он число, то пушим его в массив numbers
//   numbers.push(itemOfArray);
// }

// Елси массив не пустой, то считаем сумму элементов массива
// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
// } else if (numbers.length == 0) {
//   console.log('Массив пустой');
// }

// console.log(`Общая сумма чисел равна ${total}`);
// !END Задание 6

// !Задание 7
// Есть массив logins с логинами пользователей.
// Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра
// login и верни true или false в зависимости от того, попадает ли длина параметра в
// заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и
// добавляемый логин как параметры и проверяет наличие login в массиве allLogins,
// возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:
// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и
// вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'

// Если логин валиден, функция addLogin проверяеть уникальность
// логина с помощью функции isLoginUnique

// Если isLoginUnique вернет false, тогда addLogin не добавляет логин
// в массив и возвращает строку 'Такой логин уже используется!'

// Если isLoginUnique вернет true, addLogin добавляет новый логин
// в logins и возвращает строку 'Логин успешно добавлен!'

// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно.
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте,
// не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false.
// Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.

// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// Проверка № 1. Логин валиден?
// Ф-я проверки на валидность логина
// const isLoginValid = function (login) {
//   return login.length >= 4 && login.length <= 16 ? true : false;
// };

// Проверка № 2. Логин уникален, повторяется в массиве других логинов?
// Ф-я проверки на уникальность логина
// const isLoginUnique = function (allLogins, login) {
//  Если массив logins содержит login, то оно не уникально и тогда false. Иначе - true.
//   false - неуникально
//   true - уникально
//   return allLogins.includes(login) ? false : true;
// };

// Основная функция, которая включает ссылки на другие функции в себе
// const addLogin = function (allLogins, login) {
// Проверка № 1. Логин валиден?
// Если логин не валиден - находится не в нужно диапазоне длины строки,
// т.е.ф-я isLoginValid() возращает false;
//   то прекращаем выполнение всей функции addLogin
//   if (!isLoginValid(login)) {
//     return console.log(
//       `Ошибка добавление логина "${login}"! Логин должен быть от 4 до 16 символов`,
//     );
//   }

// Проверка № 2. Логин уникален? Логин повторяется в массиве других логинов?
// Проверяем логин на уникальность
// Если вернулось false, то такой логин уєе есть, т.е. неуникален
//   то прекращаем выполнение всей функции addLogin
//   if (!isLoginUnique(allLogins, login)) {
//     return console.log(`Логин "${login}" уже используется!`);
//   }

//   allLogins.push(login);
//   return console.log(`Ваш Логин "${login}" успешно добавлен!`);
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(`После добавления Вашего логина, массив имен такой: ${logins}`);

// *Вариант № 2
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length < 16;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  // if (isLoginValid(login)) {
  //   console.log(`${login} - валидный`);
  // } else {
  //   return `Ошибка! Логин: ${login} должен быть от 4 до 16 символов`;
  // }

  // if (!isLoginUnique(allLogins, login)) {
  //   console.log(`${login} - уникальный`);
  // } else {
  //   return `Логин: ${login} уже используется!`;
  // }

  // if (isLoginValid(login) && !isLoginUnique(allLogins, login)) {
  //   logins.push(login);
  //   return `login: ${login} прошел все проверки и добавлен в массив!`;
  // }

  if (isLoginValid(login) && !isLoginUnique(allLogins, login)) {
    logins.push(login);
    return `login: "${login}" прошел все проверки и добавлен в массив!`;
  } else {
    return `login: "${login}" не прошел проверки!`;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(`Массив до: ${logins.length}`);

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(isLoginUnique('robotGoogles'));
console.log(`Массив после: ${logins.length}`);
// !END Задание 7
