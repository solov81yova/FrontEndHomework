/*Задание 3. Сумма четных чисел в заданном промежутке
Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке

Аргументы функции два - начало промежутка и конец промежутка
Если число не целое - скруглить его в меньшую сторону
На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму
*/

function sumAllEvenNumbers(a,b) {
    
    let sum = 0;
    for (let i = Math.floor(a); i <= Math.floor(b); i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

const callbackOperation = (a, b, sumAllEvenNumbers) => {
    console.log(`The sum all even numbers from ${a} to ${b} is: ` + sumAllEvenNumbers(a, b));  
}
callbackOperation(1, 10, sumAllEvenNumbers);
