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
    static status() {
        console.log("Broj instanci " + Tacka.brojInsanci);
    }
}

Tacka.status() // 0
const t1 = new Tacka(1, 2);
Tacka.status() // 1
const t2 = new Tacka(2, -2);
Tacka.status() // 2
const t3 = new Tacka(0, 0);
Tacka.status() // 3
