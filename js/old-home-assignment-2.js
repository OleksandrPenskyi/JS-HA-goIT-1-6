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
