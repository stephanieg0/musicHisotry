//The populate-songs file is only going to return the first json file of songs.
//dependency is only jquery.
define(["jquery"], function($){

	//returning songData to entry.js
	return {
		//my callback function is my toDom function that is being called in entry.js
		songData: function(callBackFunction){
			/*Use the ajax method to import the json file inside the function that
			will be called in the entry.js file.*/
			//Function's parameter is the function that will populate the dom.
			$.ajax({
				url: "https://blinding-torch-9569.firebaseio.com/.json",
			}).done(callBackFunction);
		}
	}

});