// Дополни функцию getFriends(users) так,
// чтобы она возвращала массив друзей всех
// пользователей(свойство friends).
// У нескольких пользователей могут быть
// одинаковые друзья, сделай так чтобы
// возвращаемый массив не содержал повторений.

// // Пиши код ниже этой строки
// const getFriends = (users) => {

// };
// // Пиши код выше этой строки

// Решение
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

// Пиши код ниже этой строки
const getFriends = users => {
  //   первый вариант
  // возращаем массив имен, с повторами
  //   const newArr = users.flatMap(user => {
  //     return user.friends;
  //   });

  //   // фильтруем старый массив, уюираем повторы
  //   const filteredArr = newArr.filter((item, idx, arr) => {
  //     return arr.indexOf(item) === idx;
  //   });
  //     return filteredArr;

  // второй вариант
  return users
    .flatMap(user => {
      return user.friends;
    })
    .filter((item, idx, arr) => {
      return arr.indexOf(item) === idx;
    });
};
// Пиши код выше этой строки
// getFriends(users);
console.log(getFriends(users));

// Вызов функции с указанным массивом пользователей возвращает массив
// ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
