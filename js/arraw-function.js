// Function Declaration
// function namaFunction(name){
//     alert(`hallo, `+name);
// }

// console.log(namaFunction('Rifqi'));


// Function Expression
// let namaFunction = function (name){
//     alert(`Hallo, `+name);
// }

// console.log(namaFunction('Rifqi'));

// Arraw Function
// let namaFunction = (name) => {
//     return `Hallo, `+name;// string literal
// }

// nconsole.log(amaFunction('Rifqi'));

// implisit return 
// const namaFunction = name => `hallo, ` + name;
// console.log(namaFunction('Rifqi'));

// let mahasiswa = ['Rifqi Abrory', 'Iqbal Mustaifid', 'Roy'];
// let jumlahHuruf = mahasiswa.map(function (name) {
//     return name.length;
// });
// console.log(jumlahHuruf);

// sort code with arraw function 'map'
// let jumlahHuruf = mahasiswa.map(name => name.length);
// console.log(jumlahHuruf);

// arraw function 'map' return object
// let jumlahHuruf = mahasiswa.map(name => ({ name: name, words: name.length }));
// console.table(jumlahHuruf);



// Konsep 'this' pada arraw function
// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let satu = 'size';
//     let dua = 'caption';

//     if (this.classList.contains(satu)) {
//         [satu, dua] = [dua, satu];// pindah/ganti data pada varible
//     }

//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
//     }, 600);
// })