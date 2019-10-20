// Membuat Object pada javascript :
// 1. Object Literal
// 2. Function Declaration
// 3. Constructor Function (keyword "new") 
// 4. Object.create()


// 1. Object Literal
// Problem : tidak efektif jika menggunakan object yang banyak.dan memakan banyak resource/memory
// let Mahasiswa1 = {
//     //property , value
//     nama: 'Rifqi',
//     energy: 10,
//     //property, method
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat datang, ${this.nama}, Selamat makan!`);// `` = string literal
//     }
// }

// let Mahasiswa2 = {
//     //property , value
//     nama: 'Iqbal',
//     energy: 10,
//     //property, method
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat datang, ${this.nama}, Selamat makan!`);// `` = string literal
//     }
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 2. Function Declaration
// Cara ke -1
// Problem : banyak melalukan duplikasi mehtod, atau pengulangan setiap instansiasi
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`Selamat datang, ${this.nama}, Selamat makan!`);
//     }

//     mahasiswa.bermain = function (jam) {
//         this.energy -= jam;
//         console.log(`Selamar bermain ${this.nama}`);
//     }
//     return mahasiswa;
// }

// instansiasi
// let rifqi = Mahasiswa("Rifqi", 10);
// let iqbal = Mahasiswa("Iqbal", 15);

// Cara ke -2
// Problem : mengelola 2 object, jadi setiap ada penambahan object method(object literal) baru, 
// maka pada object function declaration harus di daftarkan atau sebaliknya jika di hapus
// Solusi nya dengan "Object.create()"

//object literal
// const MethodMahasiswa = {
//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`Selamat datang, ${this.nama}, Selamat makan!`);
//     },

//     bermain: function (jam) {
//         this.energy -= jam;
//         console.log(`Selamar bermain ${this.nama}`);
//     }
// }// Object ini akan di simpan 1 kali di memory
// //object function declaration
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = MethodMahasiswa.makan;// akan mengacu pada object yang sudah di simpan di memory
//     mahasiswa.bermain = MethodMahasiswa.bermain;
//     return mahasiswa;
// }

// // instansiasi
// let rifqi = Mahasiswa("Rifqi", 10);
// let iqbal = Mahasiswa("Iqbal", 15);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 3. Constructor Function (keyword "new")
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`Selamat datang, ${this.nama}, Selamat makan!`);
//     }

//     this.bermain = function (jam) {
//         this.energy -= jam;
//         console.log(`Selamar bermain ${this.nama}`);
//     }
// }

// instansiasi
// let rifqi = new Mahasiswa("Rifqi", 10); 


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 4. Object.create()
// Problem : 

//object literal
const MethodMahasiswa = {
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Selamat datang, ${this.nama}, Selamat makan!`);
    },

    bermain: function (jam) {
        this.energy -= jam;
        console.log(`Selamar bermain ${this.nama}`);
    }
}

//object function declaration
function Mahasiswa(nama, energy) {
    let mahasiswa = Object.create(MethodMahasiswa);// dapat terhubung dengan Object literal(parent-nya)
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;// tidak perlu di daftarkan method2 nya
    return mahasiswa;
}

// instansiasi
let rifqi = Mahasiswa("Rifqi", 10);
let iqbal = Mahasiswa("Iqbal", 15);