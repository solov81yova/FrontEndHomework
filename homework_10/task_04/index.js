/*Задание 4. Простые числа в заданном промежутке
Нужно создать две функции.

Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым, 
или нет. Число является простым, если оно делиться без остатка только на 1 и само на себя.

Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, 
где n - первый аргумент функции.

Вторая функция должна пользоваться первой функцией для определения простых чисел.

Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.
*/

function checkForPrimeNumber(num) {
num = Math.floor(num);
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
checkForPrimeNumber();


const returnArrayPrimeNumbers = (n) => {
    const arr = [];
    for (let i = 1; i < n; i++) {
        if (checkForPrimeNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}

// const n = 17;
console.log('Fill the array with prime numbers: ', returnArrayPrimeNumbers(17));

