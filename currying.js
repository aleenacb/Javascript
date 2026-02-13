function add(a) {
    return function(b){
        return a + b;
    };
}
const addTwo = add(2);
console.log(addTwo(3));
console.log(addTwo(4));