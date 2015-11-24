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
	
	
		//make a reference to call the songs object from firebase
		var fireRef = new Firebase("https://blinding-torch-9569.firebaseio.com");

		//make a function and assign the songs object to songData variable.
		fireRef.child("songs").on("value", function (snapshot){
		// console.log("snapshot", snapshot);

		//assigned the value of the firebase snapshot into my object
		songData.songs = snapshot.val();
		// console.log("songsData", songData);
		 

		//passed object into dom function and to filter
		toDom.toDomData(songData);
		filter.forMyFilter(songData);
		// console.log("toDomData", toDom.toDomData);
		// console.log("filter.forMyFilter", filter.forMyFilter);



	

	});


});