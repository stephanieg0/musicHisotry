//The populate-songs file is only going to return the first json file of songs.
//dependency is only jquery.
define(function (require){
	//new dependency format
	var $ = require("jquery");
	var firebase = require("firebase");
	var filter = require("filter");
	var toDom = require("to-dom");

	var songData = {
		songs: {

		}
	};

	

	// eventHandlers.init();

	//returning songData to entry.js
	// return {
	// 	//my callback function is my toDom function that is being called in entry.js
	// 	songData: function(callBackFunction){
	// 		//Use the ajax method to import the json file inside the function that
	// 		//will be called in the entry.js file.//
	// 		//Function's parameter is the function that will populate the dom.
	// 		$.ajax({
	// 			url: "https://blinding-torch-9569.firebaseio.com/.json",
	// 		}).done(callBackFunction);
	// 	}
	// }
	
	//make a reference to call the songs object from firebase
	var fireRef = new Firebase("https://blinding-torch-9569.firebaseio.com");

	//make a function and assign the songs object to songData variable.
	fireRef.child("songs").on("value", function (snapshot){
		console.log("snapshot", snapshot);

		songData.songs = snapshot.val();
		console.log("songsData", songData);

		toDom.toDomData(songData);
		filter.forMyFilter(songData);
		console.log("toDomData", toDom.toDomData);
		console.log("filter.forMyFilter", filter.forMyFilter);


	

	});


});