/*eslint-env browser*/

//STEP 1 - The abs(x) method 
var x = prompt('Enter any number');
window.console.log(Math.abs(x));


//STEP 2 - The ceil(x) method 
x = prompt('Enter any floating point value (decimal). ');
alert(Math.ceil(x));

//STEP 3 - The floor(x) method 
x = prompt('Enter any floating point value (decimal). ');
alert(Math.floor(x));

//STEP 4
numbers = prompt('Enter any 5 numbers. Please, delimit each number with comma. Example: 1,2,3,4,5 ');
numberth = numbers.trim().split().Number;
console.log('The largest number here is ', Math.max(numbers),'. The smallest number here is ',Math.min(numbers), '.'  );
console.log(numbers);
// alert(Math.max(numbers));
// alert(Math.min(numbers));

//STEP 5 -find the square root of the number
var num = prompt("Enter a number and we will find the square root");
console.log(Math.sqrt(num));
