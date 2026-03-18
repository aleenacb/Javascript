function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example
const search = debounce(() => console.log("Searching..."), 500);
search();
search();
search(); // Only last one runs
