// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 100; i += 2) {
//     arr.push(i);
// }
// console.log(arr);

// b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1; i < 100; i += 2) {
//     arr.push(i);
// }
// console.log(arr);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (732 - 8)) + 8);
// }
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let numsArr = [100,250,50,168,120,345,188];
//
// let result = 0;
// for (let j = 0; j < numsArr.length; j++) {
//     result += numsArr[j];
// }
// console.log(`Всього разом: ${result}`);
// result = result / numsArr.length;
// console.log(`Середній чек = ${result.toFixed(2)}`);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let randomArr = [];
// let newArr = [];
// for (let i = 0; i < 20; i++) {
//     randomArr.push(Math.floor(Math.random() * 100) + 1);
//     newArr.push(randomArr[i] * 5);
// }
//     console.log(randomArr);
//     console.log(newArr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let array = [0, 17, -3, 60, 4, 'okten', 'sunshine', 'school', 'love', 'string', true, false];
//
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
let usersWithCities = [];
for (let users of usersWithId) {
    for (let cities of citiesWithId) {
        if (users.id === cities.user_id) {
            users.address = cities;
            usersWithCities.push(users);
        }
    }
}
console.log(usersWithCities);


//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100) + 1);
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [];
// let newArr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100) + 1);
//     newArr.push(arr[i]);
// }
// console.log(arr);
// console.log(newArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr = [ 'a', 'b', 'c'];
// let result = '';
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let result = '';
// let i = 0;
// while (i < arr.length) {
//     result += arr[i];
//     i++;
// }
// console.log(result);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let result = '';
// for (const value of arr) {
//     result += value;
// }
// console.log(result);


console.log(arr.join(''));
