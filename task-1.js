"use strict";

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const key = 'mood';
const value = 'happy'; 

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  [key]: value,
};
user[key] = value;
console.table(user);

user.hobby = 'skydiving'; 
console.table(user);

user.premium = false;
console.table(user);

const arrayUser = Object.keys(user);
console.log(arrayUser);

for (const names of arrayUser) {
  console.log(names, user[names]);
}
