// 3! = 3 X 2 X 1
// 4! = 4 X 3 X 2 X 1
// 5! = 5 X 4 X 3 X 2 X 1
// 6! = 6 X 5 X 4 X 3 X 2 X 1
var factorial = 1;
for(var i = 1; i <= 7; i++) {
    console.log(i);
    
    factorial = factorial * i;
}