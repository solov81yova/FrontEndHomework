/*Написать функцию, которая принимает на вход массив чисел и возвращает их сумму. 
Если получится использовать метод reduce - будет здорово. Завтра его рассмотрим.
*/

const arr = [1, 3, 5, 9];

function getSumElements(arr) {
    const sum = 0;
    const sumElem = arr.reduce((acc, values) => acc + values, sum
    );
    console.log(sumElem);
}
getSumElements(arr);


// второй способ
function getSumElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
getSumElements(arr);