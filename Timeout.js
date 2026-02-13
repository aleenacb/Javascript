function createTimer() {
    for(let i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log(`Timer ${i}`);
        }, i * 1000);
    }
}
createTimer();