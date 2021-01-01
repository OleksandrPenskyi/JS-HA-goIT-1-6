// Сервису приготовления и доставки еды требуется
// функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так,
//     чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>.
// Ваш заказ < позиция > -й в очереди.
// ' Позиция это значение параметра position - позиция
// элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта - заказа
// в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map,
//     получился массив сообщений о статусе заказов из массива orders.

// Решение
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

function composeMessage(position) {
  return `Готовим ${this[position].dish} для ${
    this[position].email
  }. Ваш заказ ${position + 1}-й в очереди.`;
}

const messages = orders.map((item, index, array) => {
  return composeMessage.call(array, index);
});

console.log(messages);
// Переменной `messages` с помощью метода `map` присваивают значение - массив,
// создаваемый вызовом функции`composeMessage`.Значение`this` при вызове функции переопределяется с помощью метода`call`
