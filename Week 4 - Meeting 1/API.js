// // ----HTTP methods - The 4 verbs
// GET: retrieves information from the specified source (you just saw this one!)
// POST: sends new information to the specified source.
// PUT: updates existing information of the specified source.
// DELETE: removes existing information from the specified source.


// // ----A post request
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.google.com/", false);
// xhr.send();

// 	console.log(xhr.status);
// 	console.log(xhr.statusText);

// ---- 200 , 404



// ----Anatomy of a Post request
// POST /codecademy/learn-http HTTP/1.1
// Host: www.codecademy.com
// Content-Type: text/html; charset=UTF-8
// Name=Eric&Age=26


// ----API key
// var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";	


// ----- Response

// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8

// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.codecademy.com/">Accepted</string>


// -----Parsing XML
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes[0].textContent);



// // ------- Parsing JSON
// var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

// var json = JSON.parse(demo);
// console.log(json.pets);



src="https://apis.google.com/js/client.js?onload=handleClientLoad";




// ------- YouTube API 

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// // Helper function to display JavaScript value on HTML page.
// function showResponse(response) {
    // var responseString = JSON.stringify(response, '', 2);
//     document.getElementById('response').innerHTML += responseString;
//     console.log(responseString);
// }

// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
//     // This API key is intended for use only in this lesson.
//     // See http://goo.gl/PdPA1 to get a key for your own applications.
//     gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

//     search();
// }

// function search() {
//     // Use the JavaScript client library to create a search.list() API call.
//     var request = gapi.client.youtube.search.list({
//         part: 'snippet',
//         q:'papandreou'
//     });
    
//     // Send the request to the API server,
//     // and invoke onSearchRepsonse() with the response.
//     request.execute(onSearchResponse);
// }

// // Called automatically with the response of the YouTube API request.
// function onSearchResponse(response) {
//     showResponse(response);
// }
