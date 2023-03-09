function sumOfNumbers() {
    if(!process.argv[2]) return 0;
    let sum = 0;
    for (let index = 2; index < process.argv.length; index++) {
        if(isNaN(+process.argv[index])) continue;
        sum += +process.argv[index];
    }
    return sum;
}

console.log(sumOfNumbers())