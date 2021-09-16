// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while(i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// function getFactorial(number){
//     let factorial = 1;
//     let i = number;
//     while(i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// reverse for loop

//  function getFactorial(number){
//     let factorial = 1;
//      for(let i = number; i >= 1; i--){
//          factorial = factorial * i;
//      }
//      return factorial;
//  }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// var num1 = 1;
// let num2 = 2;
// const num3 = 3;

// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// function evenNumber(even){
//     if(even % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// var number = 52;
// var myNumber = evenNumber(number);
// console.log(myNumber)

// function number(num1, num2, num3){
//     var total = num1 + num2 + num3;
//     return total;
// }

// var myNumber = number(12, 15, 45);

// console.log(myNumber);

// (0°C × 9/5) + 32 = 32°F
// var celcieus = 0;
// function celciusToFarenheight(celcieuss){
//     if((celcieus * 9/5) + 32 == 32) {
//         var total = celcieus;
//         return total;
//     }
    
// }
//     var result = celciusToFarenheight(20);
//     console.log('Hoia gelo jomfa ', result);

// grading system
var i = 35;
if(i == 33) {
    console.log('pass');
}

else if(33 >= 40) {
    console.log('d');
}
else if(40 <= 50) {
    console.log('e');
}
else if(50 <= 60) {
    console.log('A-');   
}
else if(60 <= 70){
    console.log('A');
}
else if(70 <= 80){
    console.log('A+')
}
else {
    console.log('fail')
}
    