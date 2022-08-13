// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

document.write(`<h4>Task 1</h4>`);

let hello = 'hello';
console.log(hello);
// alert(hello);
document.write(`<div>${hello}</div>`);

let owu = 'owu';
console.log(owu);
// alert(owu);
document.write(`<div>${owu}</div>`);

let com = 'com';
console.log(com);
// alert(com);
document.write(`<div>${com}</div>`);

let ua = 'ua';
console.log(ua);
// alert(ua);
document.write(`<div>${ua}</div>`);


let one = 10;
console.log(one);
// alert(one);
document.write(`<div>${one}</div>`);

let PI = 3.14;
console.log(PI);
// alert(PI);
document.write(`<div>${PI}</div>`);

//і т.д..................................

let boolean = true;
console.log(boolean);
// alert(boolean);
document.write(`<div>${boolean}</div>`);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Anastasiia';
let middleName = 'Stepanivna';
let lastName = 'Kulynych'

let person = `${lastName} ${firstName} ${middleName}`;
// let person = lastName + ' ' + firstName + ' ' + middleName;

console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter name');
let lastNameFromPrompt = prompt('Enter middleName');
let age = +prompt('Enter age');

console.log(name, lastNameFromPrompt, age);