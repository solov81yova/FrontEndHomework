/*Написать функцию, которая принимает на вход массив чисел 
и возвращает массив из тех же элементов, но в обратном порядке.
*/

const arrOfNumbers = [2, 5, 7, 13, 23, 27, 19];

function getReverseArray(arrElem) {
    return arrElem.slice().reverse();// скопировали массив и перевернули 
}
console.log(getReverseArray(arrOfNumbers));