// Задание
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов. Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// Тесты
// Объявлена переменная productName.
// Значение переменной productName это строка 'Дроид'.
// Объявлена переменная pricePerItem.
// Значение переменной price это число 3500.
// Объявлена переменная message.
// Значение переменной message это строка Вы выбрали Дроид, цена за штуку 3500 кредитов.

// Базовый код
const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;