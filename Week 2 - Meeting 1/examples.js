// 1)Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data : [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6] 

// Array.prototype.bubbleSort_algo = function() 
// {
// var is_sorted = false;
//  while (!is_sorted) 
//  {
//     is_sorted = true;
//     for (var n = 0; n < this.length - 1; n++) 
//     {
//       if (this[n] > this[n+1]){
//         var x = this[n+1];
//         this[n+1] = this[n];
//         this[n] = x;
//         is_sorted = false;
//       }
//     }
//   }
//   return this;
// };

// console.log([6,4,0, 3,-2,1].bubbleSort_algo());

// 2)Write a JavaScript program which returns a subset of a string.
// Sample Data : dog
// Expected Output : ["d", "do", "dog", "o", "og", "g"] 





// String.prototype.sub_String = function() 
// {
//   var subset = [];
//   for (var m = 0; m < this.length; m++) 
//   {
//     for (var n = m+1; n<this.length+1; n++) 
//     {
//       subset.push(this.slice(m,n));
//     }
//   }
//   return subset;
// };

// console.log("fdfgdfgdgfdog".sub_String());

// 3)Write a JavaScript program to create a Clock.
// Note : The output will come every second.
// Expected Console Output :
// "14:37:42" 
// "14:37:43"
// "14:37:44"
// "14:37:45" 
// "14:37:46" 
// "14:37:47" 

function my_Clock() 
{
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}

my_Clock.updateTime = function (secs) 
{
    this.seconds+= secs;

    if (this.seconds >= 60)
    {
      this.minutes++;
      this.seconds= 0;
    }

    if (this.minutes >= 60)
    {
        this.hours++;
      this.minutes=0;
    }

    if (this.hours >= 24)
    {
        this.hours = 0;
    }

};

my_Clock.update = function () 
{
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};


my_Clock.run = function ()
{
   setInterval(this.update.bind(this), 1000);
};


var clock = new my_Clock();
clock.run();

// 4)Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user. 

