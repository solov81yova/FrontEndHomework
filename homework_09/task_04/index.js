/*Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. 
Найти сумму всех элементов массива. Вывести в консоль.
*/

const arr = [];

for (let i = 0; i < 10; i++) {
    let randNum = arr.push(Math.floor(Math.random() * 50) + 1);
}
console.log('Random array: ' + arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log('The sum of array elements: ' + sum);