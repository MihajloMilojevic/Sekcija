class Tacka {
    static brojInsanci = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Tacka.brojInsanci++;
    }
    print() {
        console.log(`(${this.x}, ${this.y})`)
    }
}

console.log(Tacka.brojInsanci); // 0
const t1 = new Tacka(1, 2);
console.log(Tacka.brojInsanci); // 1
const t2 = new Tacka(2, -2);
console.log(Tacka.brojInsanci); // 2
const t3 = new Tacka(0, 0);
console.log(Tacka.brojInsanci); // 3
