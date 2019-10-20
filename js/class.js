// object Class

class MahasiswaClass {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        return `Selamat makan ${this.nama}`;
    }

    bermain(jam) {
        this.energy -= jam;
        return `Selamat bermain ${this.nama}`;
    }
}

let abrory = new MahasiswaClass("Rifqi", 10);
