// Дополни код так, чтобы в переменной planetsLengths
// получился массив длин названий планет.
// Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets;

// Решение
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);
// Значение переменной planetsLengths это массив [5, 4, 6, 6].
