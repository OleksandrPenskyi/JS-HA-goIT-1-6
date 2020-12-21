// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
// но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они
// работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект)
// в массив в свойстве potions.

// removePotion(potionName) - удаляет объект зелья с именем potionName
// из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья
// с названием oldName на newName в массиве potions.

// Решение
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  // !Работает, не менял.
  getPotions() {
    return this.potions;
  },

  // !Работает, не менял.
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },

  // !Переписывал
  removePotion(potionName) {
    // перебирал массив обьектов potions
    for (let i = 0; i < this.potions.length; i += 1) {
      //   console.log(this.potions[i]);
      //     console.log(this.potions[i].name);

      // Если элемент.name обьекта равен по значению слову которое мы ищем, то весь элемент массива this.potions[i] удаляем
      if (this.potions[i].name === potionName) {
        // console.log(`нашли тут ${this.potions[i].name}`);
        return this.potions.splice(i, 1);
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },

  // !Переписывал
  updatePotionName(oldName, newName) {
    // перебирал массив обьектов potions
    for (let i = 0; i < this.potions.length; i += 1) {
      //   console.log(this.potions[i]);
      //     console.log(this.potions[i].name);

      // Если элемент.name обьекта равен по значению слову которое мы ищем, то элемент массива this.potions[i].name переименовуем
      if (this.potions[i].name === oldName) {
        return (this.potions[i].name = newName);
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};

// atTheOldToad.getPotions();
// console.log(atTheOldToad.potions);
//* Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает
// [{ name: 'Зелье скорости', price: 460 },
// { name: 'Дыхание дракона', price: 780 },
// { name: 'Каменная кожа', price: 520 }].

// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// console.log(atTheOldToad.potions);
//* Для исходного объекта после вызова метода
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }),
//     в массиве potions последним элементом будет этот объект.

// atTheOldToad.removePotion('Дыхание дракона');
// console.log(atTheOldToad.potions);
//* Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'),
//     в свойстве potions будет массив
//     [{ name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 }]

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.log(atTheOldToad.potions);
//* Для исходного объекта после вызова метода
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'),
//     в свойстве potions будет массив
//     [
//         { name: 'Зелье скорости', price: 460 },
//         { name: 'Полиморф', price: 780 },
//         { name: 'Каменная кожа', price: 520 }
//     ].
