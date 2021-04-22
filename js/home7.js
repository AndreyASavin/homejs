'use strict'

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

// 1 задача (без проверки)

function newObject (obj, from, to) {
    let newObj = {};
    
    for (let prop in obj) {
        if (obj[prop].price >= from && obj[prop].price < to)
        newObj[prop] = obj[prop];
    } return newObj;
}
console.log(newObject(goods, 1000, 3000));

// 2 задача (не сделал, надо разобрать)


//_______________________________________________________________
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

// 3 задача (как вывести инфо если автор не найден)

let userInput = prompt("Книги какого автора Вы хотите найти");
function findBooks(userInput) {
    let newBooks = [];
    for (let book of books) {
        if (userInput == book.author) {newBooks.push(book.title)}
    } 
    return newBooks
}
console.log(findBooks(userInput));

// 4 задача (не готова, надо разобрать)

function bookSort(a, b){
    for (a in books)
    for (b in books)
    if (a.title > b.title) {
        return 1
    }
    if (a.title < b.title) {
        return -1
    }
    return 0
}
console.log(books.sort(bookSort));
