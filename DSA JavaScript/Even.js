function isEven(n) {
    let rem = n % 2;
    if(rem == 0) {
        return true;
    }
    else {
        return false;
    }
}
let n = 15;
if(isEven(n)) {
    console.log("true");
} else {
    console.log("false");
}