/*Задание 5. (необязательное)
«FizzBuzz»
Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число. 
Функция должна выводить в консоль числа от 1 до n, заменяя числа:
• кратные трём — на fizz; • кратные пяти — на buzz; • кратные и трём, и пяти одновременно — на fizzbuzz.
*/

function fizzBuzz(n) {
    n = Math.floor(n);
    n >= 1;
    if (n < 1) {
        return 'it is not a natural number';
    }
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzBuzz';
    } else if (n % 3 === 0) {
        return 'fizz';
    } else if (n % 5 === 0) {
        return 'buzz';
    }
    else {
        return 'check your number';
    }
}

const callbackOperation = (n, fizzBuzz) => {
    const result = fizzBuzz(n);
    console.log(`The number ${n} is: ${result}`);
}

callbackOperation(2, fizzBuzz);
callbackOperation(3, fizzBuzz);
callbackOperation(5, fizzBuzz);
callbackOperation(15, fizzBuzz);
callbackOperation(-24, fizzBuzz);
callbackOperation(1.5, fizzBuzz);