// Сервису рассылки электронной почты необходимо добавить
// логирование действий для сбора статистики.
// Функция logAndInvokeAction(email, action) ожидает почту
// и действие которое нужно выполнить - ссылку на метод
// объекта service.Сбор статистики симулиуется логированием
// строки.Разберись и дополни код так, чтобы он работал верно.

// Решение
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

// Вызываем функцию logAndInvokeAction. Передаем первым аргументом адрес почты,
// вторым - ссылку на метод subscribe обьекта service в контексте обьекта service
// т.е. действие метода service.subscribe будет проводиться над обьектом service
// т.е. мы просто вызываем метод обьекта через забинженный аргумент функции logAndInvokeAction.
// т.е. выполнить service.subscribe только по отношению к обьекту service
console.log(
  logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)),
);
console.log(service.mailingList);

// для примера
// const newNames = {
//   mailingList: ['alex@mail.com'],
// };

// Вызываем функцию logAndInvokeAction. Передаем первым аргументом адрес почты,
// вторым - ссылку на метод subscribe обьекта service в контексте обьекта newNames
// т.е. действие метода service.subscribe будет проводиться над обьектом newNames
// т.е. мы просто вызываем метод обьекта через забинженный аргумент функции logAndInvokeAction.
// т.е. выполнить в строке 35 метод service.subscribe только по отношению к обьекту newNames
// console.log(
//   logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(newNames)),
// );
// console.log(newNames.mailingList);
