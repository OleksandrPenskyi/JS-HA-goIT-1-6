// Задача. Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// Решение
function countProps(object) {
  // Пиши код ниже этой строки
    
  let propCount = 0;

    const key = Object.keys(object); // возращает массив с ключами
    propCount = key.length;
    

  return propCount;
  // Пиши код выше этой строки
}


console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))

// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })
// возвращает 3.