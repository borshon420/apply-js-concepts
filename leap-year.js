// function isLeapYear(year){
//     if(year % 4 == 0) {
//         return true;
//     }
//     return false;
// }

function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2000;
const leapYear = isLeapYear(myYear);
console.log('Is my year leapyear', leapYear);

// const yourYear = 2224;
// const yourLeapYear = isLeapYear(yourYear);
// console.log('Is your year is leapyear', yourLeapYear);

