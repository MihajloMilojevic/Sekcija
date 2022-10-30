class Tacka {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
	static razdaljina(t1, t2) {
		return Math.sqrt(Math.pow(t1.x - t2.x, 2) + Math.pow(t1.y - t2.y, 2));
	}
}

const data = [
	new Tacka(0, 0),
	new Tacka(2, 5),
	new Tacka(-5, -3),
	new Tacka(-17, 4),
	new Tacka(0, 12),
]

function processData(data) {
	const koordinatniPocetak = new Tacka(0, 0);
	return "[ " + 
		data
			.map(t => ({
				tacka: t,
				razdaljina: Tacka.razdaljina(t, koordinatniPocetak)
			}))
			.sort((a, b) => a.razdaljina > b.razdaljina ? -1 : 1)
			.map(t => t.tacka.toString())
			.join(", ") +
		" ]";
}

module.exports = {
	Tacka,
	data,
	processData,
	globals: {
		__dirname,
		__filename
	}
}