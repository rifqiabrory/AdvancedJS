/*
    Higher Order Function diantaranya :
    1. Array.prototype.map()
    2. Array.prototype.filter()
    3. Array.prototype.reduce()
    4. Array.prototype.forEach()
*/

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// 2. Array.prototype.filter()

// filter menggunakan for looping
// const arr = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         arr.push(angka[i]);
//     }
// }
// console.log(arr);

// filter menggunakan filter()
// const arr = angka.filter(function (f) {// 1 args (f => {}) or 2 args ((a,b) => {})
//     return f >= 3;
// })
// console.log(arr);
// //sort code
// const arr2 = angka.filter(f => f >= 3);
// console.log(arr2);

// 1. Array.prototype.map()
// akan menghasilkan array baru
// const arr = angka.map(a => a * 2);
// console.log(angka);
// console.log(arr);

// 3. Array.prototype.reduce()
// akan menghasilkan array baru
// memiliki 2 args reduce(accumulator,currentValue)
// untuk melakukan sesuatu terhadap seluruh elemen pada array nya
// const arr = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);// 0 = default
// console.log(arr);


// Method Chaining (method berantai)
// dapat menggabungkan fungsi-fungsi higher order ini dalam 1x eksekusi, tanpa perlu disimpan ke dalam variable
const hasil = angka.filter(a => a > 5)// 8,9,9
    .map(a => a * 3)// 24,27,27
    .map(a => a / 2)//
    .reduce((c, d) => c + d, 0);// 78 // 39
console.log(hasil);


// 4. Array.prototype.forEach()
// tidak menghasilkan array baru