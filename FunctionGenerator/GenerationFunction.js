/*Using the function* syntax and yield keyword*/
function* generate() {
    yield 'Hello';
    yield 'world';
    return 'done';
}
const generator = generate();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
