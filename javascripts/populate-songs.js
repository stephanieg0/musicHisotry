//populate songs file is only going to return the first json file of songs.
//dependency is the json file.
define(["jquery"], function($){

	//I will be reutning the object only.
	return {

		songData: function(callBackFunction){
			console.log("songDataObject");
			//use the ajax method to import the json file inside the function that
			//will be called in the entry.js file.
			//function's parameter is the function that will populate the dom.
			$.ajax({url: "data/songs.json"}).done(function(callBackFunction){

			});
		}
	}

});