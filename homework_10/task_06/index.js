/*Задание 6. (необязательное)
Напишите функцию reverseWords(str), принимающую на вход строку. Функция должна вернуть новую строку, расставив слова в обратном порядке.
Если в строке есть знаки препинания, их можно удалить или оставить — на ваше усмотрение.
*/

function reverseWords(str) {
    let onlyStr = str.split(/[,!' ']+/);
    for (let i = 0; i < onlyStr.length; i++) {
        onlyStr.reverse();
    }
    console.log(...onlyStr);//вывод слов без запятой
}
let str = 'To be or not to be, that is the question!';
reverseWords(str);