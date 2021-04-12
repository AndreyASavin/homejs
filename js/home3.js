'use strict'

// 1) многомерный массив, все увеличить на 10
let m=[
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
]
for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++){
        m[i][j] += 10;
    }
}
console.log(m);

// 2) рандомный массив, поменять местами макс и мин
let n=[]
for (let k=0; k<7; k++) {
    n[k]=Math.floor(Math.random()*200 - 100);
}
console.log(n);
let minI = n.indexOf(Math.min(...n));
let maxI = n.indexOf(Math.max(...n));
[n[minI], n[maxI]]=[n[maxI], n[minI]];
console.log(n);

// 3) массив целых чисел (рандомный), отрицательные в новый массив (!получился многомерный!)
let x=[]
for (let y=0; y<10; y++) {
    x[y]=Math.floor(Math.random()*200 - 100);
}
console.log(x);
let f = [];
for (let z=0; z<x.length; z++) {
    if (x[z] < 0) {
        let e = x.slice(z, z+1);
        f.push(e);
    }
}
console.log(f);