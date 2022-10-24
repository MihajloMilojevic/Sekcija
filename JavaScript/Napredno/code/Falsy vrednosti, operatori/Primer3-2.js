function test(a, b) {
    let x = a ?? 5;
    let y = b ?? 0;
    console.log([x, y]);
}

test(2, -6);
test(125);
test(null, 315)
test();
test(0, 0);