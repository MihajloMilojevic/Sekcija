class Tacka {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    print() {
        console.log(`(${this.x}, ${this.y})`)
    }
}

const t1 = new Tacka(1, 2);
t1.print();