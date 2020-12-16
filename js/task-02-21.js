// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Решение
function findLongestWord(string) {
  // Пиши код ниже этой строки
  
    const toArray = string.split(' ');
   
    let theLongestNumber = toArray[0];
    // console.log(theLongestNumber.length);

    for (let i = 1; i < toArray.length; i += 1) {
        // console.log(toArray[i].length)

        if (theLongestNumber.length <= toArray[i].length) {
            theLongestNumber = toArray[i];
        }
    }

    return theLongestNumber; 

  // Пиши код выше этой строки
}