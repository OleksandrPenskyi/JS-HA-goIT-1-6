// Функция composeMessage(customerName) создаёт приветственные
// сообщения для ресторанов.Дополни код так, чтобы в переменных
// pizzaPalaceComposer и burgerShackComposer были её копии с
// привязанным контекстом к соответствующим объектам.

const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

// Задаем переменной pizzaPalaceComposer, чтобы она вызывалась в контексте обьекта pizzaPalace
const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);

// Задаем переменной pizzaPalaceMessage, чтобы она вызывала функцию записанную в переменную pizzaPalaceComposer,
// и передавал ей в качестве аргуемента customerName - 'Манго'
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// ***

// Задаем переменной burgerShackComposer, чтобы она вызывалась в контексте обьекта burgerShack
const burgerShackComposer = composeMessage.bind(burgerShack);

// Задаем переменной burgerShackMessage, чтобы она вызывала функцию записанную в переменную burgerShackComposer,
// и передавал ей в качестве аргуемента customerName - 'Поли'
const burgerShackMessage = burgerShackComposer('Поли');
