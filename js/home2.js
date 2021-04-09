'use strict'

// 1) Задача на if оценки
let count=98
if (count>100 || count<0) {
    console.log("Неверная оценка")
} else if (count <= 100 && count >= 90) {
    console.log("Отлично")
} else if (count <= 89 && count >= 60) {
    console.log("Хорошо")
} else if (count <= 59 && count >= 40) {
    console.log("Удовлетворительно")
} else {
    console.log("Попробуйте позже")
}

// 2) Задача на switch
let uIn1 = parseInt(prompt("Введите первое число"));
let uIn2 = parseInt(prompt("Введите второе число"));
let uIn3 = parseInt(prompt("3 = сложение, 5 = вычитание, 7 = умножение, 9 = деление"));
let n;
switch (uIn3) {
    case 3: n = uIn1 + uIn2;
    break;
    case 5: n = uIn1 - uIn2;
    break;
    case 7: n = uIn1 * uIn2;
    break;
    case 9: 
        if (uIn2 == 0) {
            console.log("Деление на ноль запрещено")}
            else {n = uIn1 / uIn2;}
    break;
    default:
        console.log("Нет такой операции")
}
console.log(n)

// 3) Задача на Math.random и if
let m = Math.random()*500 + 1;
if (m >= 10 && m < 25) {
    console.log("Число", m, "меньше, чем диапазон 25-200")
} else if (m >= 25 && m <= 200) {
    console.log("Число", m, "попадает в диапазон 25-200")    
} else {
    console.log("Число", m, "больше, чем диапазон 25-200")    
}

// 4) Задача на цикл for, 20 элементов 2..4..6..8..
let k = 20;
for (let i=2; k >0; i +=2) {
    console.log(i);
    k --;
}

// 5) for или while для Фионаччи
let uIn4 = parseInt(prompt("Сколько чисел Фибоначчи вам вывести?"));
let elem = [0, 1];
for (let l=2; l < uIn4; l ++) {
    elem[l] = elem[l-1] + elem[l-2];
}
console.log(elem.slice(0,uIn4)); // спасибо интернет, но не понял структуру elem = [0, 1] и elem.slice(0,uIn4)

// 6) Таблица умножения
for (let x = 1; x <= 9; x ++) {
    for (let y = 1; y <=9; y ++) {
        console.log(x+'*'+y+'='+x*y+' ') // спасибо интернет
    }
}

// 7) Бинарный поиск на цикл while - не понял как делать