const { address } = require("framer-motion/client");

const sum = 5 + 3;
const mul = 5 * 3;
const div = 8 / 2;
const diff = 8 - 4;
console.log(sum, mul, div, diff);

//Assignment operator
let n = 10;
n *= 2;
n += 5;
n -= 1;
n /= 5; 
console.log(n);

//Comparison operator
console.log(10 > 5);
console.log(10 === "10");

//Logical operator
const a = true, b = false;
console.log(a && b);
console.log(a || b);

//Bitwise operator
const res = 3 & 1;
console.log(res);
const xor = 2^4;
console.log(xor);

//Comma operator
let n1, n2;
const r = (n1 = 9, n2 = 3, n1 + n2);
console.log(r);

//Unary operator
let x = 5;
console.log(x++);
console.log(x--);
console.log(++x);
console.log(--x);

//Relational operator
const obj = {length: 1};
//in checks if property exists in an object
console.log("length" in obj);
//instanceof checks if object is an instance of constructor
console.log([] instanceof Array);


//BigInt operator
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);

//String operator
const s = "Hello World";
console.log(s);

//Chaining operator
const object = {name:"Aleena",address:{city:"Mangalore"},contact:{phone:83103242938}};
console.log(object.address?.city);
console.log(object.contact?.phone);

