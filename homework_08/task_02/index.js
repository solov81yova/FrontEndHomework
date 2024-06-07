/* Задание 2. Операторы сравнения
Выведите в консоль результаты этих выражений. Изучите результаты. */

const a = 17;
const b = 5;

a > b;
console.log(a > b); // true

a <= b;
console.log (a <= b); // false

a == b;
console.log(a == b); // false

a != b;
console.log(a != b); // true

// код символов Unicode для a = 97 и b = 98
'a' < 'b';
console.log('a' < 'b'); // true

'ab' > 'a';
console.log('ab' > 'a'); // true

// при данном сравнении строка преобразуется в число
'17' > 1;
console.log('17' > 1); // true

//строгое сравнение без приведения типов
17 === 1;
console.log(17 === 1); // false

17 === 17;
console.log(17 === 17); // true

17 === '17';
console.log(17 === '17'); // false

17 === true;
console.log(17 === true); // false

'0' === '';
console.log('0' === ''); // false

true === false;
console.log(true === false); // false

true === true;
console.log(true === true); // true

null === undefined;
console.log(null === undefined); // false

false === 0;
console.log(false === 0); // false

//нестрогое сравнение, происходит приведение типов
17 == '17';
console.log(17 == '17'); // true

'0' == '';
console.log('0' == ''); // false

0 == '';
console.log(0 == ''); // true

null == undefined;
console.log(null == undefined); // true

false == 0;
console.log(false == 0); // true


undefined == null;
console.log(undefined == null); // true

undefined == 0;
console.log(undefined == 0); // false

null == 0;
console.log(null == 0); // false

undefined < 0;
console.log(undefined < 0); // false

undefined > 0;
console.log(undefined > 0); // false

