/*eslint-env browser*/

//STEP 1 - the number of days in a month
//how many days in current month
function daysInCurrentMonth() {
    var today = new Date();
    var month = today.getMonth();
    console.log(daysInMonth(month + 1, today.getFullYear()))
}
function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}
daysInCurrentMonth();
//how many days in any month
var getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
  };
  console.log(getDaysInMonth(3, 1998));
  console.log(getDaysInMonth(12, 2000));

//STEP 2 an application that gets the month name from a particular date-   The getMonth() method (the month from 0-11).
//current month name
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  window.console.log(n);// window.console.log(d.getMonth()); -return: 3(number)

//current month name
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now = new Date();
var thisMonth = months[now.getMonth()]; 
console.log(thisMonth);

//any year month name
var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
    console.log(month_name(new Date("10/11/2009")));
    console.log(month_name(new Date("11/13/2014")));


//STEP 3 - is today weekend?

    var text;
    switch (new Date().getDay()) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        default:
        text = "Looking forward to the Weekend";
        break;
      case 0:
      case 6:
        text = "It is Weekend";
    }
    console.log(text);
//or
var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } else {
          return "still working"
        }
}
console.log(is_weekend('Mar 15, 1998'));
console.log(is_weekend('Mar 16, 1968'));
console.log(is_weekend('Mar 17, 2017'));
  

//STEP 4  - an application that gets yesterday’s day of the week
// - from particular day
dt = new Date("December 17, 2017");
dt.setDate( dt.getDate() - 1 );
console.log( dt );
// - from today
dt = new Date();
dt.setDate( dt.getDate() - 1 );
console.log( dt );    

//STEP 5 - an application that gets the current day of the week and display the first letter of the day.
d = new Date();
window.console.log(d.toDateString().slice(0,1));
