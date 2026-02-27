function printTable(n, i = 1) {
    if(i == 11)
        return;
        console.log(n * i);
    i++;
    printTable(n,i);
}
let n = 5;
printTable(n);