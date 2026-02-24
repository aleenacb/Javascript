const array = ['a', 'b', 'c'];
const it = array[Symbol.iterator]();
for(let value of it) {
    console.log(value);
}
