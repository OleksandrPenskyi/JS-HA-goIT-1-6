// Задача. Добавляем новое зелье
// Задание
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName
// в конец массива зелий в свойстве potions.

// Решение
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    if (potionName) {
      this.potions.push(potionName);
    }
    // Пиши код выше этой строки
  },
};

atTheOldToad.addPotion();
console.log(atTheOldToad.potions);
// Значение свойства atTheOldToad.
// potions это массив['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

atTheOldToad.addPotion('Зелье силы');
console.log(atTheOldToad.potions);

// После второго вызова метода atTheOldToad.addPotion('Зелье силы'),
//     в свойстве potions будет массив['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка', 'Зелье силы'].
