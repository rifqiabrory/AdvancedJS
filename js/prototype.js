// Object dengan Prototype Inheritance

function MahasiswaPrototype(nama, energy) {
    this.nama = nama;
    this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energy += porsi;
    return `Selamat datang ${this.nama}, Selamat makan!`;
}

Mahasiswa.prototype.bermain = function (jam) {
    this.energy -= jam;
    return `Selamat bermain ${this.nama}`;
}

let qiqi = new MahasiswaPrototype("Rifqi", 10);

/**
 * Catatan :
 * name.prototype bisa di check di console browser dev untuk dapat mengetahui
 * ada function apa saja di javascript seperti :
 * sort, concat, fill, filter, find, includes...
**/