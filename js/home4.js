'use strict'

// 1) Проверка окончания слова "товар"
function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; let n1 = n % 10;
    if (n > 10 && n < 20) { return n+" "+text_forms+"ов"; }
    if (n1 > 1 && n1 < 5) { return n+" "+text_forms+"а"; }
    if (n1 == 1) { return n+" "+text_forms; }
    return n+" "+text_forms+"ов";
}
 let p = declOfNum(61, "товар")
 console.log(p);

// 2) Функция range
let f=[];
function range(start, end, step=1){
    for (let i=start; i<=end; step){
        f.push(i), i+=step;
    }
    return f;
}
let c = range(1, 10, 3);
console.log(c);

// 3) Функция поиска спама (не готова)
function findSpam(arr1, arr2) {
    let t = arr1.split(" "), m=[];
    for (let i = 0; i < t.lenght; i++) {
    m = t.filter(elem => arr2[i].includes(elem))
    i++;}
    return m.length
}
let u = ("да нет да нет привет да нет привет да да да пока супер супер чо каво")
let w = ["да", "нет"]
console.log(findSpam(u, w));

// 4) многомерный массив
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
let A1=numsArr.map(elem=>elem.map(num=>num*=10));
console.log(A1);
let A2=numsArr.map(elem=>elem.filter(num=>num>0));
console.log(A2);

