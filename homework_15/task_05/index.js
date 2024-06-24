/*Написать функцию, которая принимает на вход 2 объекта, и склеивает их в один, на выходе долежн быть объект, который содержит все свойства обоих объектов. Если свойства(ключи) во входящих обьектах повторяются, то взять значение из второго объекта.
Входящие:
{
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
  key5: 'value5'
};

{
  key3: 'new_value3',
  key4: 'new_value4',
  key5: 'new_value5',
  key6: 'value6',
  key7: 'value7'
};
Результат:
{
  key1: 'value1',
  key2: 'value2',
  key3: 'new_value3',
  key4: 'new_value4',
  key5: 'new_value5',
  key6: 'value6',
  key7: 'value7'
}
*/

 const objOne = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
  };
  
  const objTwo = {
    key3: 'new_value3',
    key4: 'new_value4',
    key5: 'new_value5',
    key6: 'value6',
    key7: 'value7'
  };

  function getOneObject(obj1, obj2) {
    
    return { ...obj1, ...obj2 };
  }
  console.log(getOneObject(objOne, objTwo));
  

  // второй способ

  function getOneObject(obj1, obj2) {
    const res = {};
    Object.entries(obj1).forEach(([key, value]) => {
        res[key] = value;
    });
    Object.entries(obj2).forEach(([key, value]) => {
        res[key] = value;
    });
    return res;
  }
  console.log(getOneObject(objOne, objTwo));
