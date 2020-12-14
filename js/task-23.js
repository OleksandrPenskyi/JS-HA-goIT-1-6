// Задание
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Тесты
// Объявлена функция isNumberNotInRange(start, end, number).
// В выражении использован оператор !.
// Вызов isNumberNotInRange(10, 30, 17) возвращает false.
// Вызов isNumberNotInRange(10, 30, 5) возвращает true.
// Вызов isNumberNotInRange(20, 50, 24) возвращает false.
// Вызов isNumberNotInRange(20, 50, 76) возвращает true.

// Решение
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}
