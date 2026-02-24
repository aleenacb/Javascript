let obj = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => ({
            value: this.data[i],
            done: i++ >= this.data.length
            })
        };
    }
};
for(let x of obj)
    console.log(x);