//variable hoisting with var
/*console.log(a);//undefined
var a = 10;*/

//2. variable hositing with let and const
/*console.log(b);//Reference error
let b = 10;//it remains in TDZ->Temporal dead zone*/

//3. Function declaration hoisting
/* greet();
function greet() {
    console.log("Hello");
    
}*/

//4. Function expression hoisting
/*hello();
var hello = function() {
    console.log("Hi");
}*/

//5. Hoisting with let & const in function
/*function test() {
    console.log(x);
    let x = 10;
}
test();*/

//6. Hoisting with classes
/*const obj = new MyClass();
class MyClass {
    constructor() {
        this.name = "Aleena";
    }
}*/

//7. Re-declaring variables with var
/*var a = 10;
var a = 20;
console.log(a); */

//8. Accessing variables declared later in loop
/*for(var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    },100);
}*/

//9. Using hoisted functions with parameter
/*test(10);
function test(num) {
    console.log(num);
}*/

//10. Hoisting in nested functions
function outer() {
    console.log(a);
    var a = 10;
    function inner() {
        console.log(b);
        var b = 10;
    }
    inner();
}
outer();