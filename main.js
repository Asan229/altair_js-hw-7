/*
  Скрипт запрашивает ввести букву русского алфавита.
  Скрипт должен вывести сообщение какая эта буква - гласная или согласная - 10 баллов
 */

// let glas = [
//   "А",
//   "а",
//   "Я",
//   "я",
//   "У",
//   "у",
//   "Ю",
//   "ю",
//   "О",
//   "о",
//   "Е",
//   "е",
//   "Ё",
//   "ё",
//   "Э",
//   "э",
//   "И",
//   "и",
//   "Ы",
//   "ы",
// ];

// let soglas = [
//   "Б",
//   "б",
//   "В",
//   "в",
//   "Г",
//   "г",
//   "Д",
//   "д",
//   "Ж",
//   "ж",
//   "З",
//   "з",
//   "Й",
//   "й",
//   "К",
//   "к",
//   "Л",
//   "л",
//   "М",
//   "м",
//   "Н",
//   "н",
//   "П",
//   "п",
//   "Р",
//   "р",
//   "С",
//   "с",
//   "Т",
//   "т",
//   "Ф",
//   "ф",
//   "Х",
//   "х",
//   "Ц",
//   "ц",
//   "Ч",
//   "ч",
//   "Ш",
//   "ш",
//   "Щ",
//   "щ",
// ];

// let char = prompt("Введите букву:");

// for (let i = 0; i <= glas.length; i++) {
//   if (char == glas[i]) {
//     alert("Введенная буква ГЛАСНАЯ");
//   }
// }

// for (let j = 0; j <= soglas.length; j++) {
//   if (char == soglas[j]) {
//     alert("Введенная буква СОГЛАСНАЯ");
//   }
// }

/* 
  “Калькулятор” - пользователь вводит с клавиатуры число, 
  символ арифметического действия (+, -, *, /) и еще одно число, 
  Скрипт должен вывести результат
*/

// let num_1 = +prompt("Введите первое число:");
// let symbol = prompt("Введите символ арифметического действия:");
// let num_2 = +prompt("Введите второе число:");
// if (symbol == "+") {
//   alert(num_1 + num_2);
// } else if (symbol == "-") {
//   alert(num_1 - num_2);
// } else if (symbol == "*") {
//   alert(num_1 * num_2);
// } else if (symbol == "/") {
//   alert(num_1 / num_2);
// }

/*
 Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, 
 вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д
 */
