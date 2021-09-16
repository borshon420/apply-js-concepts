// const number = 4;
// const reminder = number % 2;
// console.log(reminder == 0);

// const number = 144;
// function isEven(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }

const myNumber = 1641;
// const totalNumber = isEven(myNumber);
// console.log('is my number even', totalNumber);

const herNumber = 1892;
// const totalHerNumber = isEven(herNumber);
// console.log('is her number even', totalHerNumber);

// is odd function
function isOdd(number){
    if(number % 2 != 0) {
        return true;
    }
    return false;
}

const totalNumber = isOdd(myNumber);
console.log('is my number odd', totalNumber);

const totalHerNumber = isOdd(herNumber);
console.log('is her number odd', totalHerNumber);