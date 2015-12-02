define(["jquery"], function($){

	return {

		toDomData: function (songData) {
			
			console.log("this is my song data going to the dom", songData);
			for (var i = 0; i < songData.songs.length; i++){
				var newSongs = songData.songs[i];
				console.log("newSongs", newSongs);
				$("#listOfSongs").append("<div>" + newSongs.artist + "-" + newSongs.title + "-" + newSongs.album + " " + "<button class='delete-button'>Delete</button></div>");

			} 
		}
	}
});