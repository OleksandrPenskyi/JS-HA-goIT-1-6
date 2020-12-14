// Задание
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Решение
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;

    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;

    default:
      message = 'Доступ запрещён, неверный пароль!';
  }

  return message;
}
