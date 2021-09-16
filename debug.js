function getFactorial(number) {
    let factorial = 1;
    for(i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial(8);
console.log(myFactorial);