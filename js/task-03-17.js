// Задание
// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex,
//     а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Решение
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const item of colors) {
  //   console.log(item);
  //   console.log(item.hex);
  hexColors.push(item.hex);
  rgbColors.push(item.rgb);
}

console.log(hexColors);
console.log(rgbColors);
