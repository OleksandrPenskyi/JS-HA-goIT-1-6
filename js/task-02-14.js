// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// Решение
const fruits = ["яблоко", "слива", "груша", "апельсин", "банан"];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

const nonExtremeEls = fruits.slice(1, fruits.length - 1);

console.log(nonExtremeEls);
