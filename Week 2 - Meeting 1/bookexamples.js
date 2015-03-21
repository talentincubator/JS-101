//push example

// var sports = ['soccer', 'baseball'];
// var total = sports.push('football', 'swimming');

// console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
// console.log(total);  // 4

// pop example

// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

// var popped = myFish.pop();

// console.log(myFish); // ['angel', 'clown', 'mandarin' ] 

// console.log(popped); // 'sturgeon'

// math.random(); example

// // Returns a random number between 0 (inclusive) and 1 (exclusive)
// function getRandom() {
//   return Math.random();
// }

// // Returns a random number between min (inclusive) and max (exclusive)
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// // Returns a random integer between min (included) and max (excluded)
// // Using Math.round() will give you a non-uniform distribution!
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// math.ceil(); example

// Math.ceil(.95); // 1
// Math.ceil(4); // 4
// Math.ceil(7.004) // 8


// example 2

// // Closure
// (function(){

// 	/**
// 	 * Decimal adjustment of a number.
// 	 *
// 	 * @param	{String}	type	The type of adjustment.
// 	 * @param	{Number}	value	The number.
// 	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
// 	 * @returns	{Number}			The adjusted value.
// 	 */
// 	function decimalAdjust(type, value, exp) {
// 		// If the exp is undefined or zero...
// 		if (typeof exp === 'undefined' || +exp === 0) {
// 			return Math[type](value);
// 		}
// 		value = +value;
// 		exp = +exp;
// 		// If the value is not a number or the exp is not an integer...
// 		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
// 			return NaN;
// 		}
// 		// Shift
// 		value = value.toString().split('e');
// 		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
// 		// Shift back
// 		value = value.toString().split('e');
// 		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
// 	}

// 	// Decimal round
// 	if (!Math.round10) {
// 		Math.round10 = function(value, exp) {
// 			return decimalAdjust('round', value, exp);
// 		};
// 	}
// 	// Decimal floor
// 	if (!Math.floor10) {
// 		Math.floor10 = function(value, exp) {
// 			return decimalAdjust('floor', value, exp);
// 		};
// 	}
// 	// Decimal ceil
// 	if (!Math.ceil10) {
// 		Math.ceil10 = function(value, exp) {
// 			return decimalAdjust('ceil', value, exp);
// 		};
// 	}

// })();

// // Round
// Math.round10(55.55, -1); // 55.6
// Math.round10(55.549, -1); // 55.5
// Math.round10(55, 1); // 60
// Math.round10(54.9, 1); // 50
// Math.round10(-55.55, -1); // -55.5
// Math.round10(-55.551, -1); // -55.6
// Math.round10(-55, 1); // -50
// Math.round10(-55.1, 1); // -60
// // Floor
// Math.floor10(55.59, -1); // 55.5
// Math.floor10(59, 1); // 50
// Math.floor10(-55.51, -1); // -55.6
// Math.floor10(-51, 1); // -60
// // Ceil
// Math.ceil10(55.51, -1); // 55.6
// Math.ceil10(51, 1); // 60
// Math.ceil10(-55.59, -1); // -55.5
// Math.ceil10(-59, 1); // -50


// data time method examples

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]);

// string matching method examples
// ar str = 'For more information, see Chapter 3.4.5.1';
// var re = /(chapter \d+(\.\d)*)/i;
// var found = str.match(re);

// console.log(found);

// // logs ['Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1']

// // 'Chapter 3.4.5.1' is the first match and the first value 
// // remembered from `(Chapter \d+(\.\d)*)`.

// // '.1' is the last value remembered from `(\.\d)`.

// -

// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var regexp = /[A-E]/gi;
// var matches_array = str.match(regexp);

// console.log(matches_array);
// // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// this gloabal example

// console.log(this.document === document); // true

// // In web browsers, the window object is also the global object:
// console.log(this === window); // true

// this.a = 37;
// console.log(window.a); // 37

// this local example

// function f1(){
//   return this;
// }

// f1() === window; // global object

// protype constractor

// var o = {};
// o.constructor === Object; // true

// var a = [];
// a.constructor === Array; // true

// var n = new Number(3);
// n.constructor === Number; // true

// function Tree(name) {
//   this.name = name;
// }

// var theTree = new Tree('Redwood');
// console.log('theTree.constructor is ' + theTree.constructor);

// -

// function Type () {}

// var types = [
//   new Array(),
//   [],
//   new Boolean(),
//   true,             // remains unchanged
//   new Date(),
//   new Error(),
//   new Function(),
//   function () {},
//   Math,
//   new Number(),
//   1,                // remains unchanged
//   new Object(),
//   {},
//   new RegExp(),
//   /(?:)/,
//   new String(),
//   'test'            // remains unchanged
// ];

// for (var i = 0; i < types.length; i++) {
//   types[i].constructor = Type;
//   types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
// }

// console.log(types.join('\n'));