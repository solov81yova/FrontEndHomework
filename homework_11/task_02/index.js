/*Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
[
  [ 'height', 170 ],
  [ 'weight', 80 ],
  [ 'sport', 'regbi' ],
  [ 'full name', 'John Doe' ],
  [ 'sing', 'love' ],
  [ 'speed', 90 ]
]
*/

const arraysWithDoubleElements = [
    ['height', 180],
    ['weight', 70],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90],
];

function makeNewObject(arraysWithDoubleElements) {
    const arr1 = {};
    for (let i = 0; i < arraysWithDoubleElements.length; i++) {
        arr1.push(arraysWithDoubleElements[i]);
    }
    return arr1;
}

console.table(Object.fromEntries(arraysWithDoubleElements));
console.log(Object.fromEntries(arraysWithDoubleElements));