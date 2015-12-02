//populate songs file is only going to return the first json file of songs.
//dependency is the json file.
define(["jquery"], function($){

	//I will be reutning the object only.
	return {

		songData: function(callBackFunction){
			$.ajax({url: "../data/songs.json"}).done(callBackFunction);
		}
	}

});