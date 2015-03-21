// Do not comment this function
    Object.prototype.extend = function(obj) {
       for(var i in obj)
          this[i] = obj[i];
    }; 


// ------------------------ 	Working with This   -----------------------------
//										(1)
// var fn = function (a,b) {
//    console.log(this.name);
// };

//  obj1 =  {
//   name : "I am the 1st",
//   age:20 + 5,
//   run : fn
// };

// obj2 =  {
//   name : "I am the 2nd",
//   run : fn
// };

// // console.log(obj1.age);
// obj2.run();
// obj1.run();
// fn();

// 										(1)

// 										(2)
// // Second Example 

// var fn = function (one,two){
//   console.log(this,one,two);
// };

// var red={name:'red'}, green={name:'green'}, blue={name:'blue'};

// fn(red,green);   // (1)What is the output ?????

// //=> when we called the function one became red  and two became green, just for the function run 
//										(2)

//										(3)
// //Add this above
// red.show = fn;
// //=> when we call the method what will be the outcome ?

// red.show(blue,green);
// // 

// // Using call
// fn(red,green); 
// fn.call(blue,red,green);
// fn.apply(blue,[red,green]);									// (3)

// bindfn = fn.bind(blue);
// bindfn(red,green);
// ------------------------ 	Objects - Copying objects and chaining objects   ------------------



// Copy - One time after that no relation 
// 							(1)					
// var gold = { a : 1 };                   
// var blue = {};
// blue.extend(gold); 
// blue.b = 2; 
// console.log(blue.a);
// gold = {a:33};
// console.log(blue.a);

							// (1)			

// // 							(2)			
//Chaining  -    They are not copied - just chained 
// var gold = {a:1};                   
// var rose = Object.create(gold);
// rose.b = 3;
// console.log(rose.a);
// console.log(rose.b);

// gold.a = 33;
// console.log(rose.a);
// 							(2)	





// //   -------------------------Construction Function for Classes (group of similar objects)  -------
// // 		 --------------------   Factory pattern	 -------------------

// // 										(1)
// function Person(category,skill) {
// 	obj  = new Object(); 
	// obj.category = category;
	// obj.skill = skill;
// 	obj.sayCategory = sayCategory;
// 	return obj;
// }


// var kostas =  Person('student','JS');
// var panos =  Person('student','html');
// panos.sayCategory() ;

// // 										(1)

//Improving memory structure with Constructors
function sayCategory () {
	console.log(this.category);
}




// 		 ------------------------  Constructor pattern		-----------------------
// // 										(1)

// function Person(category,skill) {
// 	this.category = category;
// 	this.skill = skill;
// 	this.sayCategory = function () {
// 		console.log(this.category);
// 	};
// }

// var kostas = new Person('student','JS');
// var panos = new Person('student','html');
// // panos.sayCategory() ;
// console.log(    panos.skill    );

// // 										(1)


// // // using Call 
// var obj = {};     //same with var o = {};
// Person.call(obj,'teacher','JSON');   //if we had used Person('teacher','Ruby'); I would use the global object 

// console.log(obj.category);




//--------------------         Prototype pattern         -----------------

// 										(1)

// function Person () {}

// Person.prototype = {
// 	constructor: Person,
// 	category : "Student",
// 	skills : "HTML",
// 	sayCategory : function () { 
// 		console.log(this.category);
// 	} 
// };


// var goodStudent =  new Person();
// console.log(goodStudent.category);
// console.log(Object.getPrototypeOf(goodStudent));
// 										(1)


//   -----------------   Combination (Prototype , Constructor) pattern

// Constuctor property how the object was created 
// Prototype methods of the previous objects 

// // 										(1)

// function Person(category,skill) {
// 	this.category = category;
// 	this.skill = skill;
// }

// Person.prototype = {
// 	// constructor:Person,
// 	sayCategory : function () {
// 		console.log(this.category);
// 		return "";
// 	}
// };

// var person1 = new Person('student','JS');
// var person2 = new Person('student','html');

// console.log( person1.skill + person2.sayCategory());
// 										(1)


//     ------------------------     INHERITANCE ---------------------    

// From Above  					(1)
// function Person () {
// 	this.name="My name";
// }
// var Person = new Object();
// var Person = Object.create(Object);
// var Person = {} ;

// var person = new Person() ; 
// Person.prototype = {
// 	constructor: Person,
// 	category : "Student",
// 	skills : "HTML",
// 	sayCategory : function () { 
// 		console.log(this.category);
// 	} 
// };

// var person = new Person();
// person.prototype = Object.create(Person.prototype);
// // console.log(person.constructor);
// // console.log(person.category);    //(1)

// // // Using the Person Class 		(2)
// function Goodstudent () {
// 	Person.call(this);
// } 	
// Goodstudent.prototype = new Person() ;
// Goodstudent.prototype = Object.create(Person.prototype);
// // var kostas = Object.create(Person);
// Goodstudent.prototype = Person.prototype; 

// var kostas = new Goodstudent();     
// // Goodstudent.prototype = Object.create(Person.prototype);

// 	console.log(kostas.name);  //(2)
//    	console.log(kostas.skills);  //(2)


// // // Creating a function and Using the person object (3)
// // function inherit(proto) {
// //   function create() {}     
// //   create.prototype = proto; 
// //   return new create();      
// // }
// // var kostas = inherit(person);			//(3)

// var Goodstudent = function(){			//(4)
//      Person.call(this);
// };
// Goodstudent.prototype = Object.create(Person.prototype);
// var kostas = new Goodstudent();      //(4)

// //From Above  						(2-3-4)
// console.log(kostas.category);
// console.log(kostas.name);
// console.log("skills" in kostas);		//(2-3-4)

// // Extending an object  

// // One at the time 		(5)
// kostas.grade = 10; 
// console.log(kostas.grade);  (5)

// Creating a function to join objects  (6)   EXTEND 
// var mitsos = {hw:"done"};
// mitsos.call(kostas);
// kostas.extend(mitsos);   
// console.log(kostas.hw);		//	(6) 





//---------------------------- ROBOT EXAMPLE  -----------

// var Person = function(name) {
//   this.name = name ;
//   this.type = 'person';
// };

// Person.prototype.info = function(type){
//   console.log("Name:", this.name, "Type:", type);
// };

// var Robot = function(name){	
//   Person.apply(this,arguments);
// };

// // Robot.prototype = Object.create(Person.prototype);         // Set prototype to Person's
// Robot.prototype = new Person();
// person = new Person("Bob");
// robot = new Robot("Boutros");

// person.info();
// // Name: Bob Type: human
// robot.info('name');
// // Name: Boutros Type: robot




// // // ---------------------------- PLANT  EXAMPLE  -----------


function Plant (Country) {
	this.country = Country;
	this.isOrganic = true; 
  return "";
}
// Add the showNameAndColor method to the Plant prototype propert
Plant.prototype.showNameAndColor =  function () {
	console.log("I am a " + this.name + " and my color is " + this.color+ " and i Come from " +this.country);
};
// Add the amIOrganic method to the Plant prototype propert
Plant.prototype.amIOrganic = function () {if (this.isOrganic)
	console.log("I am organic, Baby!");
};
function Fruit (fruitName, fruitColor, Country) {
	Plant.call(this,Country);  //We pass the arguments in the previous Class  - With Object.create (297)
	this.name = fruitName;
	this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's prototype, thus inheriting all of Plant.prototype methods and properties
// 1  Not the correct way (this is how the post suggests it)
// Fruit.prototype = new Plant ();   // even if it still works 
// 2  The proper way 
Fruit.prototype = Object.create(Plant.prototype);  

// Creates a new object, aBanana, with the Fruit constructovar 

Plant.prototype.amNEW = function () {if (this.isOrganic)
	console.log("I am newwww!");
};
aBanana = new Fruit ("Banana", "Yellow", "Mexico");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype
console.log(aBanana.amNEW()); 

// Banana
// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. 
//The aBanana object inherits all the properties and methods from both the Plant and Fruit functions

console.log(aBanana.showNameAndColor());
 // I am a Banana and my color is yellow and I come from Mexico


// Rectangle

// function Rectangle(lenght,width) {
// 	this.length = lenght;
// 	this.width = width;
// }

// Rectangle.prototype.getArea = function () {
// 	return this.length * this.width;
// };

// Rectangle.prototype.getPerim = function () {
// 	return (this.length + this.width) *2 ;
// };

// function Square(size) {
// 	Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);

// myshape = new Square(5);  
// console.log(myshape.getArea());