"use strict";

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function (obj) {

  const values = Object.values(obj);
  console.log(values);
  for (const value of values) {
    // как в условии предусмотреть объект без значений???
    return values.length;
  
  }
}


console.log(countProps({})); // 0

console.log(countProps({
  name: 'Mango',
  age: 2
})); // 2

console.log(countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500
})); // 3