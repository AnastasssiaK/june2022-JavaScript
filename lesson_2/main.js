// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let array = [];
// array[0] = 'Hello';
// array[1] = 12;
// array[2] = true;
// array[3] = [1,2,3,4,5];
// array[4] = {
//     name: 'Sasha'
// };
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4].name);
// console.log(array[4]['name']);

//               0     1     2           3                 4               5
// let array = ['hello', 12, false, [1, 2, 3, 4, 5], {name: 'Sasha'},{name: 'cascas'}];
//
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// const book1 = {
//     title: 'title',
//     pageCount: 200,
//     genre: 'genre'
// }
// const book2 = {
//     title: 'title',
//     pageCount: 200,
//     genre: 'genre'
// }
// const book3 = {
//     title: 'title',
//     pageCount: 200,
//     genre: 'genre'
// }
//
// console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

const book1 = {
    title: 'title',
    pageCount: 200,
    genre: 'genre',
    authors:  [
        {
            name: 'Sasha',
            age:30
        },
        {
            name: 'Vasya',
            age:12
        }
    ]
}
const book2 = {
    title: 'title',
    pageCount: 200,
    genre: 'genre',
    authors: [
        {
            name: 'Sasha',
            age:30
        },
        {
            name: 'Vasya',
            age:12
        }
    ]
}
const book3 = {
    title: 'title',
    pageCount: 200,
    genre: 'genre',
    authors: [
        {
            name: 'Sasha',
            age:30
        },
        {
            name: 'Vasya',
            age:12
        }
    ]
}

console.log(book1, book2, book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let array = [
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'qwe'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'ert'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'tyty'
    }, {
        name: 'Sasha',
        username: 'Alex',
        password: 'svds'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'hj,h'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'jk.jk'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'svs'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: '/kl;.k'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'adasfa'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: 'sdfsdf'
    },
    {
        name: 'Sasha',
        username: 'Alex',
        password: '12314'
    }
]
console.log(array[0].password);
console.log(array[1]['password']);
console.log(array[2].password);
console.log(array[3]['password']);
console.log(array[4].password);
console.log(array[5]['password']);
console.log(array[6].password);
console.log(array[7]['password']);
console.log(array[8].password);
console.log(array[9]['password']);