/* 4.Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все 
свойства исходного обьетка, но значения свойств - это их типы.
Пример:
{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
*/

const BlackSea = {
    name: 'Black Sea',
    maxLengthKm: 1175,
    surfaceAreaSqKm: 436402,
    averageDepthM: 1253,
    maxDepthM: 2212,
    waterVolumeCuKm: 547000,
};

const getAnotherObj = (obj) => {
    const newObj = {};
    const newKeys = Object.keys(obj);
    const call1 = (key) => {
        newObj[key] = typeof obj[key];
    }
    newKeys.forEach(call1);
    return newObj;
}
console.log(getAnotherObj(BlackSea));
