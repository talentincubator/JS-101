// --------  General Examples  ----------

// How do we put comments  (keyboard shortcut)? 

// What is the difference  ? 
var demo = 1; 
demo = 1 ; 







// --------  Data Types  Examples ----------

// What is the output?
console.log(Number("00011"));
console.log(Number(true));
console.log(Number("hELLO"));
console.log(parseInt('222blue'));
console.log(parseInt('blue333'));

console.log(typeof("demo"));
console.log(typeof({"obj":1}));

// Convert the number 22 to a string 

// Answer
var string1 = (22).toString();
var string2 = String(22);

// How to write in my console:  He said 'Hello all 
//								my name is Kostas'

// Answer
console.log('He said \'Hello all\nmy name is Kostas\'');





// --------  Operators  Examples ----------

// What is the output?
var demo2 = false ;
demo2 --;  // converts everyting to a Number data type

var stringvar = "hello";
console.log(!stringvar, !0, !"", !false, !!demo2);    // converts everyting to a Boolean data type
console.log(stringvar && true);
console.log(stringvar && false ||  stringvar && true);
console.log(null || "user");
console.log("Karl" || "user");

console.log(21 % 4);


console.log(null == undefined);
console.log(true == 1);
console.log('5' == 5);
console.log(false === 0);
console.log('33' === 33);
console.log('55' != 55);
console.log('44' !== 44);

// Conditional Operators example 
var num1 = 33;
var num2 = 22;
var max = (num1 > num2) ? num1 : num2; 
console.log(max);  

// Assignment operator - What is the output?
var addnum = 5;
addnum += 10;
console.log(addnum);


// Comma operator - What is the output?
var num = (5,22,3,5,2);
console.log(num);

var alpha = 15, vita = 33, gamma = 3;
console.log(gamma);




// --------  Statements  Examples ----------

// Give me the syntax of the most used Statements 

// Answer
// if
if (true) 
{}
else if (true)
{}

// do-while
do {} 
while (true);

// while
while (true)
{}

// for 
for (var i = 0 ; (true) ; i++) {
}

// for-in
var dog = {bark:"gab", eat:"miam", sleep:"zzzzz"};
for (var action in dog) {
	console.log(action);
}	

// break   Question = What is the looptimes value with te break statement and what would it be with the continue statement
var looptimes = 0;
for (var i = 1; i <10; i++) {
	if (i % 5 === 0) {
		break;
	}
	looptimes++;
}
console.log("loop times ",looptimes);


// switch
// Question :Put an number tells you if it is negative positive or zero
var number = 10;
switch (true) {
	case number > 0: 
	console.log ("less than zero");
	break;
	case  number < 0:
	console.log ("greater than zero");
	break;	
	case  number < 0:
	console.log ("equals to zero");
	break;			
	default:
	console.log('Its not a number');	
}

// Real life Example
function getString(csslist) {
  if (typeof csslist === 'string' && !!($(csslist).text())) {
    return $(csslist).length === 1 ? $(csslist).text() : $($(csslist)[0]).text();
  }
  if (typeof csslist === 'object') {
    for (var i = 0; i < csslist.length; i++) {
      if (!!$(csslist[i]).text()) {
        return $(csslist).length === 1 ? $(csslist).text() : $($(csslist)[0]).text();
      }
    }
  }
  return false;
}



// --------  Functions  ----------

// What is a function ? 
// Which are the ways to create a new function
var action = function () {
	// code block
};

function action2 () {
	// code block
}

// Function arguments
// Question : What is the output
function doadd (num1, num2) {
	if (arguments.length == 1) {
		console.log(num1);
	} else if (arguments.length == 2) {
		console.log(argument[0] + num2);
	}
}

console.log(doadd(5));
console.log(doadd(5,10));
