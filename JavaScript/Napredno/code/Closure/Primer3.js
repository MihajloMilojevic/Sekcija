function counter(initalValue) {
    let count = initalValue ?? 0;
    function increment() {
        count++;
    }
    function getCount() {
        return count;
    }
    return {increment, getCount};
}

const counter1 = counter(0);
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
