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

class Krug extends Tacka {
    #r;
    constructor(x, y, r) {
        super(x, y);
        this.R = r;
    }
    get R() {return this.#r; }
    set R(r) { if(r <= 0) throw new Error("R <= 0"); this.#r = r; }
    #toString() {
        return `{(${this.X}, ${this.Y}), ${this.R}}`;
    }
    print() {
        console.log(this.#toString());
    }
    obim() {
        return 2 * this.R * Math.PI;
    }
    povrsina() {
        return Math.pow(this.R, 2) * Math.PI;
    }
}

const k = new Krug(0, 0, 1);
k.print();
console.log(k.povrsina(), k.obim());