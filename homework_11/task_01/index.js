/*Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. 
Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
*/

const objectsArray = ['Freddy', 'Mercury', 45, 'Show must go on'];

function acceptArray(objectsArray) {
    const newObject = {};
    for (let i = 0; i < objectsArray.length; i++) {
        newObject[objectsArray[i]] = objectsArray[i];
    }
    return newObject;
}

console.log(acceptArray(objectsArray));