/*Объявить массив из 5 элементов и заполнить его любыми числами. 
Присвоить 5 переменным значения из массива с помощью деструктуризации.
*/

const arr = [1, 2, 3, 4, 5];

let a;
let b;
let c;
let d;
let e;

[a, b, c, d, e] = [...arr];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(`The variable a has been assigned a value ${[arr[0]]}`);
console.log(`The variable b has been assigned a value ${[arr[1]]}`);
console.log(`The variable c has been assigned a value ${[arr[2]]}`);
console.log(`The variable d has been assigned a value ${[arr[3]]}`);
console.log(`The variable e has been assigned a value ${[arr[4]]}`);