/*Объвить массив из 10 любых элементов, заполнить. 
Вырезать первый элемент и добавить его в конец массива.
*/

const arr = [];

for (let i = 0; i < 10; i++) {
    let randNum = arr.push(Math.round(Math.random() * 100));
}

console.log('Random array: ' + arr);
let first = arr.shift();
console.log('Array without first element: ' + arr); 
arr.push(first);
console.log('Array with first element at the end: ' + arr);