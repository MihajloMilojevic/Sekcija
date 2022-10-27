class Tacka {
    static brojInsanci = 0;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        Tacka.brojInsanci++;
    }
    print() {
        console.log(`(${this.x}, ${this.y})`)
    }
    getX() { return this.#x; }
    setX(x) { this.#x = x; }
    
    getY() { return this.#y; }
    setY(y) { this.#y = y; }

    static status() {
        console.log("Broj instanci " + Tacka.brojInsanci);
    }
}

const t1 = new Tacka(1, 2);
console.log(t1.getX());
t1.setX(10);
console.log(t1.getX());
t1.x = 0; // greška