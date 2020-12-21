// Задача. Удаляем зелье
// Задание
// Дополни метод removePotion(potionName) так,
//     чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// Решение
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    //   Ищем в массиве необходимый элемент, который приходит с аргумента функции
    let findItem = this.potions.indexOf(potionName);
    // console.log(findItem);
    //   находим по индексу этот элемент в массиве и удаляем
    this.potions.splice(findItem, 1);
    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

atTheOldToad.removePotion('Дыхание дракона');
console.log(atTheOldToad.potions);
// После первого вызова метода atTheOldToad.removePotion('Дыхание дракона'),
//     в свойстве potions будет массив['Зелье скорости', 'Каменная кожа'].
