// Задача. Получаем все зелья
// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто
// возвращает значение свойства potions.

// Решение
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],

  getPotions() {
    return this.potions;
  },

  // Пиши код выше этой строки
};

console.log(atTheOldToad.getPotions());

// Вызов метода atTheOldToad.getPotions()
// возвращает['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
