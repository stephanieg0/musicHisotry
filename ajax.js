$(document).ready(function(){
	//Loop for both json files
	function songData(songsList){
		for (var i = 0; i < songsList.songs.length; i++){
			var newSongs = songsList.songs[i];
			$("#listOfSongs").append("<div>" + newSongs.artist + "-" + newSongs.title + "-" + newSongs.album + " " + "<button class='delete-button'>Delete</button></div>");

		}  
	}
	//Calling "songData" function and json file 
	$.ajax({url: "songs.json"}).done(songData);

	//Event listener for click and calling "more-songs" json file
	$("body").on('click', '#more-button', function() {
		$.ajax({url: "more-songs.json"}).done(songData);
		$("#more-button").attr("disabled", true);	
	})


});
