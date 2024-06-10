/*Разбить строку на слова и вывести в консоль по одному слову в строке.
Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
*/

let text = 'метилпропенилендигидроксициннаменилакрилическая кислота';
let words = text.split(' ');
console.log(words);

let indexOfWord1 = text.indexOf('метил');
console.log(indexOfWord1);
let substring1 = text.substring(0, 5);
console.log(substring1);


let indexOfWord2 = text.indexOf('пропенил');
console.log(indexOfWord2);
let substring2 = text.substring(5, 13);
console.log(substring2);


let indexOfWord3 = text.indexOf('гидроксицин');
console.log(indexOfWord3);
let substring3 = text.substring(17, 28);
console.log(substring3);


let indexOfWord4 = text.indexOf('акрилическая');
console.log(indexOfWord4);
let substring4 = text.substring(35, 47);
console.log(substring4);


let indexOfWord5 = text.indexOf('кислота');
console.log(indexOfWord5);
let substring5 = text.substring(48, 56);
console.log(substring5);

