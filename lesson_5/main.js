// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleS = (a, b) => a * b;

console.log(`Площа прямокутника дорівнює: ${rectangleS(10, 20)}.`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;
// return Pi * r * r;
// return Pi * r ** 2;
let circleS = (r) => PI * Math.pow(r, 2);

console.log(`Площа кола дорівнює: ${circleS(20, PI)}.`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderS = (r, h) => ((2 * PI * r * h) + 2 * PI * Math.pow(r, 2));
console.log(`Площа циліндра дорівнює: ${cylinderS(5, 12)}.`);

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [0, 17, -3, 60, 4, 'okten', 'sunshine', 'school', 'love', 'string', true, false];

function arrayFn(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayFn(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text) {
    document.write(`<p>${text}</p>`)
}

createP('Lo rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
}

createUl('hello okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlWithLi(text, n) {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createUlWithLi('hello world', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArr (array) {
    document.write(`<ol>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ol>`);
}

listArr(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: 'Vasya',
        age:22
    },
    {
        id: 2,
        name: 'Sasha',
        age:23
    },
    {
        id: 3,
        name: 'Petya',
        age:24
    }
]

function arrDoc (array) {
    document.write(`<div>`);
    for (const value of array) {
        document.write(`<h4>${value.id}. ${value.name}.</h4>`);
        document.write(`<p>Age - ${value.age}.</p>`)
    }
}
    document.write(`</div>`);

arrDoc(users);

// - створити функцію яка повертає найменьше число з масиву
let nums = [1,2,3,4,-5];
function smallest(arr) {
    let min = arr[0];
    for (const minElement of arr) {
        if(minElement < min) {
            min = minElement;
        }
    }
    return min;
}

console.log(smallest(nums));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sum = (arr) => {
    let res = 0;
    for (const arrElement of arr) {
        res += arrElement;
    }
    return res;
};

console.log(sum(nums));