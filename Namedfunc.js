//1. Named Function: It has its own name
/*function Namedfunc() {
    return "Hello!";
}
console.log(Namedfunc());*/

//2.Anonymous function: It doesnot have name it is assigned to a variable
/*const Namedfunc = function(){
    return "HI";
};
console.log(Namedfunc());*/

//3. Function expression: When u assign a function to variable. The function can be used by calling that variable
/*const add = function(a, b) {
    return a + b;
}
console.log(add(2, 5));*/

//4. Arrow function
/*const square = n => n * n;
console.log(square(4));*/

//5. Immediately invoked function expression
/*(function() {
    console.log("HI");
})();*/

//6. Callback function
/*function num(n, callback) {
    return callback(n);
}
const double = (n) => n * n;
console.log(num(6, double));*/

//7. Constructor function
/*function Person(name, age) {
    this.name = name;
    this.age = age;
}
const user = new Person("Aleena",22);
console.log(user.name);*/

//8. Async function
/*async function fetchData(){
    return "Datafetched";
}
fetchData().then(console.log);*/

//9. Generator function
/*function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);*/

//10. Recursive function
/*function factorial(n) {
    if(n == 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(4));*/

//11. Higher order function
/*function multipleBy(factor) {
    return function(num){
        return num * factor;
    };
}
const double = multiplyBy(2);
console.log(double(5));*/

//12. Nested function
/*function outerfun(a) {
    function innerfunc(b) {
        return a + b;
    }
    return innerfunc;
}
const addTen = Outerfun(10);
console.log(addTen(4));*/

//13. Pure function
/*function pureAdd(a, b) {
    return a + b;
};
console.log(pureAdd(3, 6));*/

//14. Default Parameter function
/*function greet(name = "Guest") {
    return "Hello" + name;
}
console.log(greet());
console.log(greet("Aleena"));*/

//15. Rest parameter function
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
