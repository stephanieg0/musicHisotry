


var minute = 60;
	console.log(minute);
var hour = minute * 60;
	console.log(hour);
var day = hour * 24;
	console.log(day);

var year = day * 365;



var hoursInYear = year / hour;
	console.log(hoursInYear);
var minutesInDecade =(year * 10 ) / minute;
	console.log(minutesInDecade);
var MyAge = 27;
	console.log(MyAge);
var myAgeInSeconds = MyAge * year;
	console.log("myAgeInSeconds" , myAgeInSeconds);
var isOld = 40;

if (MyAge < isOld) {
	console.log("I am young")
} else {
	console.log("I am old")
}

var colors = ["red","blue","yellow","purple"];
var luckyNumbers = [4, 8, 15, 16, 23, 42];
for (var index = 0; index < luckyNumbers.length; index = index+2) {
	console.log(luckyNumbers[index]);
}
// colors[4] = "orange";
// colors.push("teal");
// console.log(colors);
// var LastItem = colors.pop();



//colors.unshift("orange"); //add item to begining
//color.shift(); //remove from begining

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// //simple for loop over colors
// for(var index = 0; index<colors.lenght; index++) {
// 	console.log("current color is", colors[index]);
// }

//
// for (var i = 10; i < 15; i++) {
// 	console.log(i);
// }

//loop that increments by 10
 for (var i = 10; i <= 100; i = i += 10) {
 	console.log("current value", i);
 }

//loop diveds by 2
 for (var i = 1024; i >= 2; i = i /2) {
 	console.log("divided by 2", i);
 }

//add items to an array
var itemArray = [];
for (var i = 2; i <= 65; i = i * i) {
	itemArray.push(i);
}

//starts at 100 and decreases by 1
var x = [];
for (var i = 100; i >= 1; i -= 1) {
	console.log("subtracted by 1", i);
	if ( i % 2 === 0) {
		x.unshift(i);
	} else {
		x.push(i);
	}
}
console.log("x", x);

//string concatenation
var firstName = "Stephanie";
var lastName = " Goldstein";
var fullName = firstName + lastName;
console.log(fullName);
console.log("character", fullName.charAt(3));

var el = document.getElementById("container");
console.log("el", el);

el.innerHTML = "I love NSS";
var containerText = el.innerHTML;
	console.log("containerText", containerText);
