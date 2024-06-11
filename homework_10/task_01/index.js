/*Задание 1. Even/Odd
Создайте ф-цию, которая определяет парность числа

Функция должна принимать целое число
Если число не целое - скруглить его в меньшую сторону
Функция должна вернуть строку 'even' если число четное
Функция должна вернуть строку 'odd' если число не четное
*/

function pairOfNumbers(a) {
    return Math.floor(a) % 2 === 0;
}

const callbackOperation = (a, pairOfNumbers) => {
    if(pairOfNumbers(a)) {
        return console.log('even');
    } else {
        return console.log('odd');
    }
}
callbackOperation(7, pairOfNumbers);

