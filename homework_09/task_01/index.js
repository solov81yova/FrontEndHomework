/*Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
Найти максимальное и минимальное значение в массиве. Вывести в консоль.
*/

const arr = [];

for (let i = 0; i < 10; i++) {
    let randNum = arr.push(Math.floor(Math.random() * 100) + 1);
}

let max = Math.max(...arr);
let min = Math.min(...arr);
console.log('Random array: ' + arr);
console.log('Maximum: ' + max);
console.log('Мinimum: ' + min);
