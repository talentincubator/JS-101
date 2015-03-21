
// Examples with operators
// Posts.deny({
//   update: function(userId, post, fieldNames, modifier) {
//     var errors = validatePost(modifier.$set);
//     return errors.title || errors.url;
//   }
// });

// function eg (post) {
//   var errors = {};
//   if (!post.title)
//     errors.title = "Please fill in a headline";
//   return errors; }


// Example with scope 

// var color = "blue";
// function changeColor(){
// 	if (color === 'blue'){
// 		color = "red";
// 	} else {
// 		color = "blue";
// 	}
// }








// Race game without Function 
// -----
// ----
// -----


var time = 5;
car_positions = [1, 1, 1];

while (time) {
    // decrease time
    time -= 1;

    console.log('');
    for (var i = car_positions.length - 1; i >= 0; i--) {
    	// move car
    	if (Math.random() > 0.3) {
    		car_positions[i] += 1;
    	}
    	// draw car
    	switch (car_positions[i]) {
    		case 5:
    		console.log('-----');    		
    		break;    
    		case 4:
    		console.log('----');
    		break;
    		case 3:
    		console.log('---');
    		break;		
    		case 2:
    		console.log('--');    		
    		break;    	
    		case 1:
    		console.log('-');    		
    		break;    
    	} 
    }
}



// Race game with Function 
// -----
// ----
// -----



// function move_car () {
// 	for (var i = car_positions.length - 1; i >= 0; i--) {
// 		if (Math.random() > 0.3) {
//     		car_positions[i] += 1;
//     	}
// 	}
// }
// function draw_car (car) {
// 	var distance = "";
// 		 for (var j = car - 1; j >= 0; j--) {
// 		  	distance +="-";
// 		  } 
//   console.log(distance.toString());
//  }

// function run_step_of_race () {
// 	time -= 1;
// 	move_car();
// }

// function  draw () {
// 	for (var i = car_positions.length - 1; i >= 0; i--) {
// 		draw_car(car_positions[i]);
		
// 	}
// 	console.log("");
// }

// var time = 5;
// var car_positions = [1, 1, 1];

// while (time) {
// run_step_of_race();
// draw();
// }








// // Power example (Recursion) 
// function Recursionpower(base, exponent) {
//   if (exponent === 0)
//     return 1;
//   else
//     return base * power(base, exponent - 1);
// }

// // → 8

// // // Is even (Recursion) 

// function isEven(n) {
//   if (n === 0)
//     return true;
//   else if (n == 1)
//     return false;
//   else if (n < 0)
//     return isEven(-n);
//   else
//     return isEven(n - 2);
// }



/*
Count a letter in a string - Javascript
*/

// function countChar(string, ch) {
//   var counted = 0;
//   for (var i = 0; i < string.length; i++)
//     if (string.charAt(i) == ch)
//       counted += 1;
//   return counted;
// }
// // console.log(countChar("kakkerlak", "k"));

// /*
// Create a new function that takes one argument(just the string) - Javascript
// */

// function countBs(string) {
//   return countChar(string, "B");
// }
// console.log(countBs("BBC"));








// // Examples with Arrays - and simple methods


// // Reverse a string  : Enter a string and the program will reverse it and print it out.

// function reverseIt(str) {
// 	return str.split("").reverse().join("");
// }
// console.log(reverseIt("Hi there"));


// /*
// Count words in a string - Javascript
// */
// function wordCounter(str) {
// 	return str.split(' ').length;
// }

// console.log(wordCounter('Call me Ishmael.')); // 3
// console.log(wordCounter('A day without sunshine is like, you know, night.')); // 9




// // Closures 
// function first(n) {
// 	var local  = n;
// 	return	function() {return local;};}

// console.log(first(5));

// var second = first(5);

// console.log(second());	










// /*
// Check if Palindrome - Javascript
// */

// function palindrominator(str) {
// 	if (str === "") {
// 		return "Empty String";
// 	}
// 	return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
// }

// console.log(palindrominator("pizza")); // false
// console.log(palindrominator("racecar")); // true


