//using var keyword
console.log("Using var keyword");
    var x = 1;
    if (x === 1) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
//using let keyword
console.log("Using let keyword");
    let x1 = 1;
    if (x1 === 1) {
        let x1 = 2;
        console.log(x1);
    }
    console.log(x1);

//using const variable
console.log("Using const keyword");
const number = 48;

try {
    const number = 48;
} catch(err) {
    console.log(err);
}
console.log(number);