// Измени код так, чтобы объект parent стал
// прототипом для объекта в переменной сhild.

// Решение
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

console.log(child.name);
console.log(child.age);
console.log(child.heritage);
