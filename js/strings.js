/*eslint-env browser*/

//STEP 1
var nameL = prompt('Enter your name');
var numX = nameL.length;
alert('Your name has ' + numX + ' characters');

console.log(`Your name has ${numX} characters`);
console.log('Your name has ', numX , ' characters');

//STEP 2
// var nameU = prompt('Please, Enter Your Name');
// var t = prompt('Please, enter a number from 1 to ' + nameU.length);
// var numLetter = t + 1;
// alert(t + ' letter is ' + numLetter);

//console.log(t + ' letter is ' + numLetter);

var nameL = prompt('Please, enter your name');
var m = prompt('Please, enter a number from 1 to ' + nameL.length);//var nameNum = nameL.length;--var numLetter = Number(m+1);
alert(m + ' letter is ' + nameL[m]);
console.log(m + ' letter is ' + nameL[m]);

// nameL = prompt('- enter your name');
// var n = prompt('- enter a number from 1 to ' + nameL.length);
// alert(n, ' letter is ' + nameL.charAt(n));
// console.log(n, ' letter is ' , nameL.charAt(n));

//STEP 3
var nameFirst = prompt('Enter your first name');
var nameLast = prompt('Enter your last name');
var a = nameFirst.length;
var b = nameLast.length;
var sum = a + b;
alert('Your name has ' + sum + ' characters');  

//STEP 4
var text = 'The quick brown fox jumps over the lazy dog';
var indexSt4 = text.indexOf("fox");
alert('In the sentence the index of the word \'fox\' is ' + indexSt4);
console.log('In the sentence the index of the word \'fox\' is ' + indexSt4);

//STEP 5
text = 'The quick brown fox jumps over the lazy dog';
var indexSt5 = text.lastIndexOf("fox");
alert('In the sentence the LAST index of the word \'fox\' is ' + indexSt5);
console.log('In the sentence the LAST index of the word \'fox\' is ' + indexSt5);

var indexSt5 = text.lastIndexOf("the");
alert('In the sentence the LAST index of the word \'the\' is ' + indexSt5);
console.log('In the sentence the LAST index of the word \'the\' is ' + indexSt5);

//STEP 6
text = 'The quick brown fox jumps over the lazy dog';
var nameFull = prompt('Please, enter your full name');
alert(text.replace('the lazy dog', nameFull));
console.log(text.replace('the lazy dog', nameFull));

//STEP 7
text = 'The quick brown fox jumps over the lazy dog';
var wordFromString = prompt('Please, enter any word from this text: \n"The quick brown fox jumps over the lazy dog');
alert( wordFromString);
// alert(text.match/(wordFromString/g));
// console.log(text.match/(wordFromString/g));


//STEP 8
var old_string = 'The quick brown fox jumps over the lazy dog';
console.log(old_string, old_string.length);
var new_string = old_string.slice(0,31);
alert(new_string);

//STEP 9
var textUp = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
alert(textUp.trim().toLowerCase());
// var textUpTrim = textUp.trim();

textUp = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
var cleanText = textUp[0].toUpperCase() + textUp.slice(1).toLowerCase();
alert(cleanText);
console.log(cleanText);


//STEP 10
var textLow = 'the quick brown fox jumps over the lazy dog';
var cleanText1 = textLow[0].toUpperCase() + textLow.slice(1).toLowerCase();
alert(cleanText1);
console.log(cleanText1);