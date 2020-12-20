// Задание
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// Решение
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};

const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;


// console.log(apartment);
// console.log(advert);



for (const key in apartment) {
  // Пиши код ниже этой строки
    if (apartment.hasOwnProperty(key)) {
    keys.push(key);
  values.push(apartment[key]);
}
  

  // Пиши код выше этой строки
}

console.log(keys);
console.log(values);