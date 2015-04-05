document.cookie="username=John Doe";
document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

var x = document.cookie;

document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// Deleting a cookie is very simple. Just set the expires parameter to a passed date
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

 function checkCookie() {
    var username=getCookie("username");
    if (username!=="") {
        alert("Welcome again " + username);
    }else{
        username = prompt("Please enter your name:", "");
        if (username !== "" && username !== null) {
            setCookie("username", username, 365);
        }
    }
}

// // Local Storage Examples

// if(typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
// } else {
//     // Sorry! No Web Storage support..
// }

// // Store
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname"); 
// // Remove
// localStorage.removeItem("lastname");


// // The following example counts the number of times a user has clicked a button. 
// // In this code the value string is converted to a number to be able to increase the counter:

// if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount) + 1;
// } else {
//     localStorage.clickcount = 1;
// }
// document.getElementById("result").innerHTML = "You have clicked the button " +
// localStorage.clickcount + " time(s).";


// // The sessionStorage Object

// // The sessionStorage object is equal to the localStorage object, except that it stores the data 
// // for only one session. The data is deleted when the user closes the browser window.

// // The following example counts the number of times a user has clicked a button, in the current session:

// if (sessionStorage.clickcount) {
//     sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
// } else {
//     sessionStorage.clickcount = 1;
// }
// document.getElementById("result").innerHTML = "You have clicked the button " +
// sessionStorage.clickcount + " time(s) in this session."; 