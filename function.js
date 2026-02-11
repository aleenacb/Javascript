function sum(x, y) {
    return x + y;
}
console.log(sum(7, 8));
//multiply

function mul(a, b) {
    return a * b;
}
console.log(mul(2, 3));

//String
function welcomemsg(name) {
    return ("Hello " + name + " Welcome to JS");
}
let name = "User";
console.log(welcomemsg(name));

function msg(nameVal) {
    return ("Welcome" +" " + nameVal + " - User is said to be Aleena");
}
let nameVal = "User";
console.log(msg(nameVal));

//Arrow Functions
const a = ["Hydrogen", "Helium", "Lithium", "Boron", "Carbon"];
const a2 = a.map(function(s) {
    return s.length;
});
console.log("Normal Way", a2);
const a3 = a.map((s) => 
s.length); 
console.log("Using arrow function", a3);

