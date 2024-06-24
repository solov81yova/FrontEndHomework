/*Написать функцию, которая примет объект вида:
{
   'customer-id-1': {
      name: 'William',
      age: 54
   },
   'customer-id-2': {
      name: 'Tоm',
      age: 17
   }
}
и вернет массив обьектов вида:
[{name: 'William', age: 54, id: 'customer-id-1’}, {name: 'Tom', age: 17, id: 'customer-id-2'}]
*/

 const obj1 = {
    'customer-id-1': {
       name: 'William',
       age: 54
    },
    'customer-id-2': {
       name: 'Tоm',
       age: 17
    }
 }
 
 function getArrayOfObject(obj) {

    const newKeys = Object.entries(obj);
    const newArr = newKeys.map(([key, value]) => {
        return {
            ...value,
            id: key
        };
    });

    return newArr;
}
console.log(getArrayOfObject(obj1));