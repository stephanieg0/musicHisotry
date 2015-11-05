define(["jquery", "set dependency for the json?"], 
	function($){
		//this module should only do One thing; load a song file.

		//has to return something
		return {
			songData: function(){
			//ajax link to json file.
			$.ajax({url: "songs.json"}).done(function (songsObject from the json file){
				console.log("songs should be the pbject from jason");
				//this has to be called in the musicHistory_v006 file
				//example first.songData(); and the same with the second file "more-songs" as second.songData(); 
			});
				
			}
		}



		//********old******

	return {
		//Loop for both json files
		songData: function(songsList){
			console.log("this is my song data");
			for (var i = 0; i < songsList.songs.length; i++){
				var newSongs = songsList.songs[i];
				$("#listOfSongs").append("<div>" + newSongs.artist + "-" + newSongs.title + "-" + newSongs.album + " " + "<button class='delete-button'>Delete</button></div>");

			}  
		}
	};
			//Calling "songData" function and json file 
			$.ajax({url: "songs.json"}).done(songData);
	// //Event listener for click and calling "more-songs" json file
	// $("body").on('click', '#more-button', function() {
	// 	console.log("click works");
	// 	$.ajax({url: "more-songs.json"}).done(songData);
	// 	$("#more-button").attr("disabled", true);	
	// });
});



