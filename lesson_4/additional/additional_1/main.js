// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numsArr = [0, 17, -3, 60, 4];
// let strArr = ['okten', 'sunshine', 'school', 'love', 'string'];
// let array = [0, 17, -3, 60, 4, 'okten', 'sunshine', 'school', 'love', 'string', true, false];
//
// console.log(numsArr);
// console.log(strArr);
// console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let emptyArr = [];
//
// emptyArr[0] = 56;
// emptyArr[1] = 'hello';
// emptyArr[2] = false;
// emptyArr[3] = 'okten';
// emptyArr[4] = 24;
// emptyArr[5] = 0;
// emptyArr[6] = -13;
//
// console.log(emptyArr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
// let i = 0;
// while (i < array.length) {
//     let value = array[i];
//     i++
//     console.log(value);
// }

// 2. перебрати його циклом for
// for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     console.log(value);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < array.length) {
//     if (i%2 !== 0) {
//         console.log(array[i]);
//     }
//         i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     if (i%2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < array.length) {
//     let value = array[i];
//     if (value % 2 === 0) {
//         console.log(value);
//     }
//         i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     let value = array[i];
//     if (value % 2 === 0) {
//         console.log(value);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);;
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9.1. перебрати його циклом while
// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }

// 9.2. перебрати його циклом for
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);;
// }

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = array.length - 1;
// while (i >= 0) {
//     if (i%2 !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = array.length - 1; i >= 0; i--) {
//     if (i%2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let nums = [10, 99, 12, 3, 7, 56, 0, 38, 64, 41];
// for (const num of nums) {
//     console.log(num);
// }



// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArr = ['one', 'two', 'three', 'okten', 'school', 'cool', 'day', 'sunshine', 'hello', 'world'];
// for (const string of strArr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [0, 17, -3, 60, 'okten', 'school', false, 'hello', 'world', true];
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (const value of array) {
//     if (typeof value === "boolean") {
//         console.log(value);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (const value of array) {
//     if (typeof value === "number") {
//         console.log(value);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (const value of array) {
//     if (typeof value === "string") {
//         console.log(value);
//     }
// }



// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
//
// arr[0] = 4;
// arr[1] = false;
// arr[2] = 0;
// arr[3] = 'okten';
// arr[4] = 'hello';
// arr[5] = 65;
// arr[6] = 89;
// arr[7] = -2;
// arr[8] = 'world';
// arr[9] = 'school';
//
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>Item ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(`<div>Item ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<div>Item ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//     console.log(i);
//     document.write(`<div>Item ${i}</div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//     console.log(i);
//     document.write(`<div>Item ${i}</div>`)
//     }
// }



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name: 'The India Story', pages: 365, authors: 'Bimal Jalal', genres: ['drama', 'fantasy']},
    {name: 'Listen to Your Heart: The London Adventure', pages: 287, authors: 'Ruskin Bond', genres: ['fiction', 'fantasy', 'legend']},
    {name: 'Business of Sports: The Winning Formula fpr Success', pages: 198, authors: 'Vinit Karnik', genres: ['realistic fiction']},
    {name: 'A Place Called Home', pages: 421, authors: 'VP Venkaiah Naidu', genres: ['horror', 'fantasy', 'drama', 'fable']},
    {name: 'Leaders, Politicians, Citizens', pages: 204, authors: 'Rasheed Kidwai', genres: ['biography']},
    {name: 'Lal Salam', pages: 165, authors: 'Smriti Irani', genres: ['short story']},
    {name: 'Queen of Fire', pages: 390, authors: 'Devika Rangachari', genres: ['fantasy']},
    {name: 'Hear Yourself', pages: 311, authors: 'Indian Author Prem Rawat', genres: ['folklore', 'historical fiction', 'drama']},
    {name: 'The Maverick Effect', pages: 178, authors: ['Harish Mehta', 'Rasheed Kidwai'], genres: ['fantasy']}
]

// -знайти наібльшу книжку.
console.log(books.sort((prev, next) => next.pages - prev.pages).slice(0,1));

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log(books.sort((prev, next) => next.genres.length - prev.genres.length).slice(0,1));

// - знайти книжку/ки з найдовшою назвою
console.log(books.sort((prev, next) => next.name.length - prev.name.length).slice(0,1));

// - знайти книжку/ки які писали 2 автори
console.log(books.filter(value => value.authors.length === 2));

// - знайти книжку/ки які писав 1 автор
console.log(books.filter(value => value.authors === 1));
