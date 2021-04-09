'use strict';
//сумма цифр
let n = 38;
let a = n%10 + (n-n%10)/10;
console.log(a, 'сумма цифр');

//смена мест
let i=7, j=123;
i=j-i;
j=j-i;
i=j+i;
console.log(i, j, 'поменяли местами');

//площадь параллелепипеда
let l=13, w=12, h=10
let res = 2 * (l*w + l*h + w*h);
console.log(res, 'площадь параллелепипеда');

//тернарный оператор
let start=8, end=3;
let between = start < end ? end - start : -1;
console.log(between, 'тернарный оператор')