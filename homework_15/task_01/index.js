/*Написать функцию, которая принимает на вход массив имен и возвращает массив имен, 
начинающихся на букву "а" (большую или маленькую).
*/

const arrayOfNames = ['Anna','Andrew','Dmitriy','Maksim','German','Dasha','Anastasia','apple']; 

function getNamesWithA(elemArrNames) {
    return elemArrNames.filter((letterElement) => letterElement.toUpperCase().startsWith`A` );
}
console.log(getNamesWithA(arrayOfNames));
