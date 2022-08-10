document.write(`<h2>Homework 6</h2>`);

// navigator.mediaDevices.getUserMedia({video: true})
//     .then(stream => {
//     let videoplayer = document.getElementById('videoplayer');
//     videoplayer.srcObject = stream;
//     videoplayer.play();
// });

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

document.write(`<h4>Task 1</h4>`);
let hello = 'hello world';
let lorem = 'lorem ipsum';
let jsCool = 'javascript is cool';
document.write(`<ol>
    <li>Стрінга "${hello}" містить ${hello.length} символів.</li>
    <li>Стрінга "${lorem}" містить ${lorem.length} символів.</li>
    <li>Стрінга "${jsCool}" містить ${jsCool.length} символів.</li>
</ol>`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

document.write(`<h4>Task 2</h4>`);
document.write(`<ol>
    <li>${hello.toUpperCase()}</li>
    <li>${lorem.toUpperCase()}</li>
    <li>${jsCool.toUpperCase()}</li>
</ol>`)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

document.write(`<h4>Task 3</h4>`);
document.write(`<ol>
    <li>${hello.toLowerCase()}</li>
    <li>${lorem.toLowerCase()}</li>
    <li>${jsCool.toLowerCase()}</li>
</ol>`)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

document.write(`<h4>Task 4</h4>`);
let str1 = ' dirty string   ';
document.write(`<div>${str1.trim()}</div>`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
document.write(`<h4>Task 5</h4>`);

let str2 = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ');
}

let arr = stringToArray(str2);
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']
document.write(`<div>${arr}</div>`);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

document.write(`<h4>Task 6</h4>`);
let numsArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
document.write(`<div>${numsArr.map(value => value.toString())}</div>`);
console.log(numsArr.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

document.write(`<h4>Task 7</h4>`);

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((next, prev) => next.valueOf() - prev.valueOf());
    }
    if (direction === 'descending') {
        return array.sort((next, prev) => prev.valueOf() - next.valueOf());
    }
}

console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));
document.write(`<div>${sortNums(nums, 'ascending')}</div>`);
document.write(`<div>${sortNums(nums, 'descending')}</div>`);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.sort((next, prev) => prev.monthDuration - next.monthDuration));
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: 2, color: 'red'},
    {cardSuit: 'diamonds', value: 3, color: 'red'},
    {cardSuit: 'diamonds', value: 4, color: 'red'},
    {cardSuit: 'diamonds', value: 5, color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: 2, color: 'red'},
    {cardSuit: 'hearts', value: 3, color: 'red'},
    {cardSuit: 'hearts', value: 4, color: 'red'},
    {cardSuit: 'hearts', value: 5, color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {value: 'Joker', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'},
    {cardSuit: 'spades', value: 2, color: 'black'},
    {cardSuit: 'spades', value: 3, color: 'black'},
    {cardSuit: 'spades', value: 4, color: 'black'},
    {cardSuit: 'spades', value: 5, color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},
    {value: 'Joker', color: 'black'},
];
// - знайти піковий туз
console.log(cards.find(card => card.cardSuit === 'spades' && card.value === 'Ace'));
// - всі шістки
console.log(cards.filter(card => card.value === 6));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamonds'));
// - всі трефи від 9 та більше
// console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value >= 9 || card.value === 'Jack' || card.value === 'Queen' || card.value === 'King' || card.value === 'Joker'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value >= 9 + ''));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce(function (accumulator, card) {

    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }

    return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduce);