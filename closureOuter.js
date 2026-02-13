function Outer() {
    let outerVar = "Hello";
    function inner() {
        console.log(outerVar);
        outerVar = "updated";
    }
    return inner;
}
const closure = Outer();
closure();
closure();