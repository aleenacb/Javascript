function outer() {
    outerVar = "I'm in the outer loop";
    function inner() {
        console.log(outerVar);
        outerVar = "Updated";
    }
    return inner;
}
const closure = outer();
closure();
closure();