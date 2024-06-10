/*Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. 
Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.
*/

const arr = [];

for ( let i = 0; i < 10; i++) {
    let randNum = arr.push(Math.floor(Math.random() * 75) + 1);
}

let min = Math.min(...arr);
let max = Math.max(...arr);
let sum = Math.min(...arr) + Math.max(...arr);
console.log('Random array: ' + arr);
console.log('Мinimum: ' + min);
console.log('Maximum: ' + max);
console.log('The sum of maximum and minimum is: ' + sum);
