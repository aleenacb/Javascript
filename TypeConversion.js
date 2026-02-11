//String to number
let s = "123";
let n = Number(s);
console.log(n);

//Number to string
let num = 256;
let str = String(num);
console.log(str);

//Boolean to string
let bool = true;
let a = String(bool);
console.log(a);

//Boolean to number
let boolean  = true;
let b = Number(boolean);
console.log(b);

//String + number
let m = 5;
let v = "5";
let res = m + v;
console.log(res);
console.log(typeof(res));

//Boolean + number
let boolulu = true;
let numulu = 10;
let resultu = boolulu + numulu;
console.log(resultu);

//Comparison
let Str = "10";
let nu = 10;
console.log(str == nu);

//Boolean context
let c = "";
if(c) {
    console.log("This won't print");
} else {
    console.log("This will print");
}