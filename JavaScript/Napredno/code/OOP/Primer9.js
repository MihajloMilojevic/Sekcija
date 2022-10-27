class Tacka {
    static brojInsanci = 0;
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        Tacka.brojInsanci++;
    }
    #toString() {
        return `(${this.#x}, ${this.#y})`;
    }
    print() {
        console.log(this.#toString());
    }
    get X() { return this.#x; }
    set X(x) { this.#x = x; }
    
    get Y() { return this.#y; }
    set Y(y) { this.#y = y; }

    static status() {
        console.log("Broj instanci " + Tacka.brojInsanci);
    }
}

const t1 = new Tacka(1, 2);
console.log(t1.X);
t1.X = 10;
console.log(t1.X);