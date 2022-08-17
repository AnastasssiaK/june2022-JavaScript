// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

console.log(new User(1, 'Anastasiia', 'anastasssia_k', 'kulynychnastya@gmail.com'));

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];

let user1 = new User(1, 'Anstasiia', 'Kulynych', 'kulynychnastya@gmail.com', '0987764588');
let user2 = new User(2, 'Iryna', 'Korpalo', 'iryna@gmail.com', '0975643123');
let user3 = new User(3, 'Andriana', 'Chepil', 'andriana@gmail.com', '0981267037');
let user4 = new User(4, 'Yuliia', 'Kardashova', 'yuliia@gmail.com', '0967809345');
let user5 = new User(5, 'Yaryna', 'Kireeva', 'yaryna@gmail.com', '0986712097');
let user6 = new User(6, 'Solomiia', 'Chura', 'solomiia@gmail.com', '0956709861');
let user7 = new User(7, 'Vicktoriia', 'Sharmanska', 'vicka@gmail.com', '0987764588');
let user8 = new User(8, 'Vicktoriia', 'Kosyk', 'kotsyk@gmail.com', '0932547890');
let user9 = new User(9, 'Khrystyna', 'Vorobiy', 'khrystya@gmail.com', '096785412');
let user10 = new User(10, 'Kateryna', 'Ilchuk', 'katya@gmail.com', '0976543219');

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((prev, next) => prev.id - next.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'Anstasiia', 'Kulynych', 'kulynychnastya@gmail.com', '0987764588', ['pen', 'paper', 'pencil']),
    new Client(2, 'Iryna', 'Korpalo', 'iryna@gmail.com', '0975643123', ['ruler', 'glue']),
    new Client(3, 'Andriana', 'Chepil', 'andriana@gmail.com', '0981267037', ['pencil case']),
    new Client(4, 'Yuliia', 'Kardashova', 'yuliia@gmail.com', '0967809345', ['book', 'computer', 'blackboard', 'globe', 'notebook']),
    new Client(5, 'Yaryna', 'Kireeva', 'yaryna@gmail.com', '0986712097', ['chalk']),
    new Client(6, 'Solomiia', 'Chura', 'solomiia@gmail.com', '0956709861', ['bag', 'desk', 'laptop']),
    new Client(7, 'Vicktoriia', 'Sharmanska', 'vicka@gmail.com', '0987764588', ['rubber']),
    new Client(8, 'Vicktoriia', 'Kosyk', 'kotsyk@gmail.com', '0932547890', ['calculator', 'cutter', 'chair', 'lock']),
    new Client(9, 'Khrystyna', 'Vorobiy', 'khrystya@gmail.com', '096785412', ['marker', 'pen']),
    new Client(10, 'Kateryna', 'Ilchuk', 'katya@gmail.com', '0976543219', ['copy-book'])
];

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//???????????????
console.log(clients.sort((prev, next) => prev.order.length - next.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${maxSpeed} км на годину.`);
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}.`);
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let car1 = new Car('Audi', 'Germany', 2021, 320, '4.0');
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(2022);
car1.addDriver('Anastasiia');
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CreateCar {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину.`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}.`);
            }
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

let car2 = new CreateCar('BMW', 'Germany', 2012, 240, '2.0');

console.log(car2);

car2.drive();
car2.info();
car2.increaseMaxSpeed(10);
car2.changeYear(2022);
car2.addDriver('Max');

console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Princess {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

console.log(new Princess('Ariel', 16, 37));

let princesses = [
    new Princess('Cinderella', 19, 33),
    new Princess('Ariel', 16, 39),
    new Princess('Tiana', 21, 36),
    new Princess('Mulan', 18, 38),
    new Princess('Bell', 20, 35),
    new Princess('Pokahontas', 22, 38),
    new Princess('Bilosnizhka', 24, 37),
    new Princess('Jasmin', 23, 37),
    new Princess('Anna', 15, 34),
    new Princess('Elza', 17, 38),
];
console.log(princesses);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Alex', 25, 36);

console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findPrincess(princesses, prince) {
    for (const princess of princesses) {
        if (princess.footSize === prince.shoe) {
            return `Знайдена туфелька належить прицесі ${princess.name}.`;
        }
    }
}

console.log(findPrincess(princesses,prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(princesses.find((princess) => princess.footSize === prince.shoe));