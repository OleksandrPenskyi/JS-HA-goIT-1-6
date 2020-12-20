// Задача. Расходы на зарплату
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// Решение
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  // Получили массив значение
  let getValues = Object.values(salaries);
  console.log(getValues);

  // Перебрали массив значение и просуммировали
  for (const item of getValues) {
    // console.log(item);
    totalSalary += item;
  }

  // Пиши код выше этой строки
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330.
