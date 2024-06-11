/*Задание 2. Стрелочная ф-ция возводящая число в квадрат
Создайте ф-цию, которая возвращает квадрат числа

Функция должна принимать целое число
Если число не целое - скруглить его в меньшую сторону
Функция должна вернуть квадрат этого числа
*/

const squareOfNumbers = (a) => ((Math.floor(a)) ** 2);
const callbackOperation = (a, squareOfNumbers) => {
    console.log(squareOfNumbers(a));
}
callbackOperation(5.6, squareOfNumbers);
