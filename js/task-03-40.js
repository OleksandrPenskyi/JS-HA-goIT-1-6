// Задача. Обновляем зелье
// Задание
// Дополни метод updatePotionName(oldName, newName) так,
//     чтобы он обновлял название зелья с oldName на newName,
//         в массиве зелий в свойстве potions.

// Решение
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    // Ищем индекс элемента старого названия
    let indexOfItem = this.potions.indexOf(oldName);
    //   удаляем стаое название и добавляем новое
    this.potions.splice(indexOfItem, 1, newName);
    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.log(atTheOldToad.potions);
// После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'),
//     в свойстве potions будет массив['Зелье скорости', 'Полиморф', 'Каменная кожа'].

atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка');
console.log(atTheOldToad.potions);
// После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'),
//     в свойстве potions будет массив['Зелье скорости', 'Полиморф', 'Невидимка'].
