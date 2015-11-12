//the filter button
define(["jquery", "populate-songs", "to-dom"], function($, populate, toDom){

	var currentArtist;
	var currentAlbum;
	//My new object that will be given to toDomData function.
	var filteredSongObject = {
		songs: {

		}
	};

	//new function that will have the matching key to pass to songData.
	function filterSongs(songObject) {
		console.log("songObject in filterSongs", songObject);
		//loop through the object songs that I already have from firebase
		for (key in songObject.songs) {
			//matching the artist key or the album key
			if (currentArtist === songObject.songs[key].artist || currentAlbum === songObject.songs[key].album) {

				console.log("currentArtist", currentArtist);
				//assigned the matching keys into my new songs object defined above.
				filteredSongObject.songs[key] = songObject.songs[key];

				console.log("filteredSongObject", filteredSongObject.songs);
				//call my toDomData function with my new songs object to populate the dom.			
				toDom.toDomData(filteredSongObject);
			}		
		 }		
	}

	//filter button
	$("#filter-button").click(function (e){
		event.preventDefault();
		
		//getting the value from the dropdown artist option.
		currentArtist = $("#artist-dropdown").val();
		console.log("currentArtist", currentArtist);
		currentAlbum = $("#album-dropdown").val();
		console.log("currentAlbum", currentAlbum);
		//calling the songData function and passing a new function with the matching new object.
		populate.songData(filterSongs);
		
	});

	//Unfilter button
	$("#unfilter-button").click(function(){
		//empty the object
		filteredSongObject.songs = {};
		//call the original function.
      	populate.songData(toDom.toDomData);
      	console.log("unfilteredSongObject", filteredSongObject);
    });

});