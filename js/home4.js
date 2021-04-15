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
let e;
function range(start, end, step=1){
    for (e=start; e <= end; e+step){
        return f.push(e);
    } e+=step;
}
let z = range(1, 10, 2);
console.log(z);

// 3) Функция поиска спама
function findSpam(o, ...s) {
    let t = o.split(" "), count = 0;
    for (let i=0; i < s.length; i++) {
        for (let j=0; j < t.length; j++){
            if (s[i]===t[j])
            count++;
        }
            if (count >=0 || count < 3)
            return "слово "+s[i]+" не спам";
            if (count >=3 || count < 5)
            return "слово "+s[i]+" может быть спам";
            if (count >= 5)
            return "слово "+s[i]+" точно спам";
    }
}
let a = findSpam("да нет да нет привет да нет привет да да да пока супер супер чо каво", "да")
console.log(a);
