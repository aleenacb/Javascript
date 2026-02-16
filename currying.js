function mul(x) {
    return function(y) {
        return x * y;
    };
}
var mulFunc = mul(2);
console.log(mulFunc(5));