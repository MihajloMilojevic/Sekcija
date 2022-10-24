const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
// 1 2 3

const [x, y, z] = arr;
console.log(x, y, z);
// 1 2 3

const [p, , q] = arr;
console.log(p, q);
// 1 3