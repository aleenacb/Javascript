function isBitwise(n) {
    if((n & 1) == 0) {
        return true;
    } else {
        return false;
    }
}
let n = 12;
if(isBitwise(n)) {
    console.log("true");
} else {
    console.log("false");
}