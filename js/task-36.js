// Проверка спама
// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещённых слов, функция возвращает буль false.

// Решение

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');

  // Пиши код выше этой строки
  return result;
}
