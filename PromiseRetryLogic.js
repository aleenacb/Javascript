function retry(fn, retries) {
    return new Promise((resolve, reject) => {
        function attempt(n) {
            fn()
                .then(resolve)
                .catch(err => {
                    if (n === 0) {
                        reject(err);
                    } else {
                        attempt(n - 1);
                    }
                });
        }
        attempt(retries);
    });
}

// Example
const apiCall = () => Promise.reject("Fail");

retry(apiCall, 3)
    .then(console.log)
    .catch(console.error);
