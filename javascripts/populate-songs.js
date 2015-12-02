//populate songs file is only going to return the first json file of songs.
//dependency is the json file.
define(["jquery", "to-dom"], function($, dom){

	//I will be reutning the object only.
	return {

		songData: function(callBackFunction){
			console.log("songDataObject");

			$.ajax({url: "data/songs.json"}).done(callBackFunction);
		}
	}

});