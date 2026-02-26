function* example() {
    console.log("Step 1");
    yield 1;
    console.log("Step 2");
    yield 2;
    console.log("Step 3");
    return 3;
}
const gen = example();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());