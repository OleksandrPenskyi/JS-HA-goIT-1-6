// Задание
// Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль `true` или `false`. Переменная `SAVED_PASSWORD` хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр `password`.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Тесты
// Объявлена функция isValidPassword(password).
// В выражении проверки паролей использован оператор ===.
// Вызов isValidPassword('mangodab3st') возвращает false.
// Вызов isValidPassword('kiwirul3z') возвращает false.
// Вызов isValidPassword('jqueryismyjam') возвращает true.

// Решение
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = password === SAVED_PASSWORD;

  // Пиши код выше этой строки
  return isMatch;
}

console.log(isValidPassword('Jqueryismyjam'));
