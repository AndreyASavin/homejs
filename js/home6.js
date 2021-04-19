'use strict'

// 1) Кол-во вхождений одной строки в другую

function wordInclude (word, statement) {
    let mas = statement.split(" ");
    let count = 0;
    for (let i=0; i < mas.length; i++) {
        if (mas[i].includes(word)) {
            count++;
        }
    } return `Слово "${word}" встречается в предложении ${count} раз`
}
let w = "кот";
let s = "кот окотел котяра котофей которама";
console.log(wordInclude(w, s));


// 2) Проверка на палиндром

function findPalindrom(phrase){
    let first = phrase.split(" ");
    let second = first.join("");
    let i =0, j = second.length - 1;
    while (i <= Math.floor((second.length-1)/2) && j >= Math.floor((second.length-1)/2)) {
        let comp = second[i].localeCompare(second[j], undefined, {sensitivity: `accent`})
        if (comp === 0) {
            i++, j--
        } else return `Фраза "${phrase}" не палиндром`
    } return `Фраза "${phrase}" палиндром`
}
let check = "А роза упала на лапу Азора";
console.log(findPalindrom(check));
