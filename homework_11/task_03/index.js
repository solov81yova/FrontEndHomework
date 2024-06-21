/*Функция должна принимать объект и возвращать строку, где будут перечислены все значения 
свойств объекта через запятую.
Пример работы функции:

{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
*/

const BlackSea = {
  name: 'Black Sea',
  maxLengthKm: 1175,
  surfaceAreaSqKm: 436402,
  averageDepthM: 1253,
  maxDepthM: 2212,
  waterVolumeCuKm: 547000,
};

function getBackValueString(obj) {

  const valuesObj = Object.values(obj);

  // Использование reduce для создания строки значений через запятую
  const resultString = valuesObj.reduce((acc, value, index) => {
    // Добавляем запятую перед каждым значением, кроме первого
    return index === 0 ? `${value}` : `${acc}, ${value}`;
  }, '');
  console.log(resultString);
}
getBackValueString(BlackSea);


// второй способ

function getBackValueString1(obj) {
  const valuesObj = Object.values(obj);
  const resultString = valuesObj.join(', ');
  console.log(resultString);
}
getBackValueString1(BlackSea);