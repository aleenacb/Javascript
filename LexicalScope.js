function counter() {
    let count = 0;//Private variable
    return function () {
        //Access and modify the private variable
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());