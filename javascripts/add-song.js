define(["jquery", "populate-songs", "to-dom", "q"], function($, populate, toDom, Q) {
	//make a variable for the deferred promise.
	var deferred = Q.defer();

	//function to call for posting a song
	return {

		postSong: function() {
		console.log("addSong function is linking");
			//object to store specific values in the input text.
			var newSongElement = {
			songs: {
				title: $("#input-song-name").val(),
				artist: $("#input-artist-name").val(),
				album: $("#input-album-name").val()
				}
				
			};
		console.log("newSongElement in postSong Function", newSongElement);
			
		
		$.ajax({
			url: "https://blinding-torch-9569.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSongElement.songs)
			}).done(function(){
				
				//when done resolve the newSongElement value.
				deferred.resolve(newSongElement);
				
			//if fail reject the promise.
			}).fail(function(xhr, status, error) {
      		deferred.reject(error);
    	});
			//return the promise wheather is resolved or rejected.
			return deferred.promise;
		}
	}

	
		
		

	
		
		
	
});