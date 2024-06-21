/*4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, 
который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий 
исходное значение, и его тип.
Пример:

{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': 
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
        newObj[key] = {
            value: obj[key],
            type: typeof obj[key],
        };
    }
    newKeys.forEach(call1);
    return newObj;
}
console.log(getAnotherObj(BlackSea));