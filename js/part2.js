//=========part 1
//Step 1
/*
var num = prompt("Please enter a number:");
console.log(Math.abs(num));
*/

// Step 2
/*
var num = prompt("Please enter a floating point value, decimal number.");
console.log(Math.ceil(num));
*/

// Step 3
/*
var num = prompt("Please enter a floating point value, decimal number.");
console.log(Math.floor(num));
*/

// Step 4
/*
var num = prompt("Please enter 5 numbers and separate them by comma.");
num = num.split(",");
console.log(Math.max(num[0],num[1],num[2],num[3],num[4]));
console.log(Math.min(num[0],num[1],num[2],num[3],num[4]));
*/

// Step 5
/*
var num = prompt("Please enter a number.");
console.log(Math.sqrt(num));
*/


//================part 2

// Step 6
/*
var date = new Date();
console.log(date);
*/

// Step 7
/*
        var date = new Date();
        var month = date.getMonth();
        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            console.log("There are 31 days.");

        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            console.log("There are 30 days.");
        } else {
            console.log("There are 29 days.");
        } 
*/

// Step 8
/*

        var date = new Date();
        var month = date.getMonth();
switch (month) {
    case 0:
        date = "January";
        break;
    case 1:
        date = "February";
        break;
    case 2:
        date = "March";
        break;
    case 3:
        date = "April";
        break;
    case 4:
        date = "May";
        break;
    case 5:
        date = "June";
        break;
    case 6:
        date = "July";
	case 7:
        date = "August";
        break;
    case 8:
        date = "September";
        break;
    case 9:
        date = "October";
        break;
    case 10:
        date = "November";
	case 11:
        date = "December";
		break;
}

console.log(date);

*/

// Step 9
/*

        var date = new Date();
        var day = date.getDay();
if (day == 0 || day == 6){
console.log("Today is weekend.");
} else{
	console.log("Today is not weekend.");
}
*/

// Step 10
/*

var date = new Date();
var day = date.getDay();

if (day==0) {
console.log("yesterday was Saturday");
 } else if (day==1) {
console.log("yesterday was Sunday");
 } else if (day==2) {
console.log("yesterday was Monday");
 } else if (day==3) {
console.log("yesterday was Tuesday");
 } else if (day==4) {
console.log("yesterday was Wednesday");
 } else if (day==5) {
console.log("yesterday was Thursday");
 } else  {
console.log("yesterday was Friday");
 } 
*/

// Step 11
/*
        var date = new Date();
        console.log(date.toDateString().slice(0, 3));

*/


//==================part 3

// Step 12
/*

var x = prompt("Please enter a number.");
var y = prompt("Please enter another number.");
if (x==y) {
console.log("They are equal");
}  else if ( x<y) {
console.log(y);
}  else  { 
console.log(x);
}
*/

// Step 13
/*
var names = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var marks = [80, 77, 88, 95, 68];

var grade;

for (var i = 0; i < names.length; i++){
	if (marks[i] >=90){
	grade = "A";
}else if (marks[i] >=80){
	grade = "B";
}else if (marks[i] >=70){
	grade = "C";
}else if (marks[i] >=60){
	grade = "D";
}else  {
	grade = "F";
}

        console.log(names[i] + " received " + grade);
}
*/

// Step 14
/*
for (var i = 1; i <= 15; i++){
	if (i % 2 == 0){
		console.log(i + " is even.");
	} else{
		console.log(i + " is odd.");
	}
}
*/

// Step 15
/*
for (var i = 1; i <= 100; i++){
	if(i % 15== 0){
		console.log(i + "FizzBuzz");
	}else if (i % 3 == 0){
		console.log(i + "Fizz");
	}else if(i % 5 == 0){
		console.log(i + "Buzz");
	}else{
		console.log(i);
	}
}
*/

//===================part 4
/*

var ready = confirm("Are you ready to play?");

if (ready == true){
	alert("Awesome, our hero is waiting!");
}else{
	alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var direction = prompt("Which direction would you like to head (please enter forward, left, or right).");

switch (direction){
	case "forward":
		alert("You walk about 100 yards and safely make your way out of the cave.");
		break;

 case "left":
		alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		break;
		
	case "right":
		alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
                         break;

          default:

         alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
	}

var rate = prompt("Please rate the game on a scale between 1 and 10.");
if (rate < 1 || rate > 10){
	rate = 10;
}

if (rate <=5){
	alert("Whatever, you weren’t very good at this game anyway!");
}else{
	alert("Thank you, we will continue to make improvements to the game!");
}

*/

//=================part 5
/*

var coinFlip = Math.random();

var choice = prompt ("Please select heads or tails");
var result;
  if(Math.round(coinFlip)==0)  {
   result = "heads";
} else   {
   result = "tailes";
}

if (choice == result )   {

    alert ("The flip was " + result + " and you chose " + choice + " ....you win!");
}  else   {
        alert("The flip was " + result + " but you chose " + choice + "....you lose!");
}

*/
 //================part 6
/*
var coinFlip;

for (var i = 1; i <= 10; i++){
	coinFlip = Math.random();
	var result = Math.round(coinFlip);
	if (result == 0){
		console.log(i + "Heads");
	}else{
		console.log(i + "Tails");
	}
}
*/

//==============part 7
/*
var coinFlip;

do {
	coinFlip = Math.random();
	var result= Math.round(coinFlip);
	if (result == 0){
		console.log("Heads");
	}else{
		console.log("Tails");
	}
} while(result == 0);
*/

//====================part 8
/*
var x = " ";

for (var i = 0; i < 8; i++){
	x += "#";
	console.log(x);
}
*/

//=================part 9
/*
for (var i = 0; i < 16; i++){
	if (i % 2 == 0){
		console.log(i + " is even");
	}else{
		console.log(i + " is odd");
	}
}
*/







