/*eslint-env browser*/

//STEP 1.  a JavaScript function that returns a passed string with letters in alphabetical order
function alphabet_order(str) {
    return str.split('').sort().join('-');
      }
    console.log(alphabet_order("webmaster"));
    var stringFromUser = prompt('right any string');
    console.log(alphabet_order(stringFromUser));
    alert(alphabet_order(stringFromUser));

//STEP 2.  a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];
      
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
  }
  console.log(uppercase("the quick brown fox"));

//STEP 3.  a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

//STEP 4. a JavaScript function that generates a string id (specified length) of random characters
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

//STEP 5. a JavaScript function that accepts a list of country names as input and returns the longest country name as output
function Longest_Country_Name(country_name)
{
return country_name.reduce(function(lname, country) 
{
  return lname.length > country.length ? lname : country;
}, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
