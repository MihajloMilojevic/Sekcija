function add(x) {
    return function(y) {
        return x + y;
    }
}

const add2 = add(2);
console.log(add2(3));
console.log(add2(1));
console.log(add2(-2));

console.log(add(1)(3));