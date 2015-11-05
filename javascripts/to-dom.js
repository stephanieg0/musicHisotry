define(["jquery"], function($){
	return {

		toDomData: function (songData) {
			console.log("toDomObject");
			console.log("this is my song data going to the dom");
			for (var i = 0; i < songs.length; i++){
				var newSongs = songs[i];
				console.log("newSongs", newSongs);
				$("#listOfSongs").append("<div>" + newSongs.artist + "-" + newSongs.title + "-" + newSongs.album + " " + "<button class='delete-button'>Delete</button></div>");

			} 
		}
	}
});