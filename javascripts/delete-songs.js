define(["jquery", "populate-songs", "to-dom", "q"],function($, populate, toDom, Q){

	
	 
	// var currentRemoved;
	//made a newObject with correstponding keys from the array.
	// var currentRemovedObject = {
	//  	songs: {

	//  	}
	//  };

	var deferred = Q.defer();

	 return {

	 	deleteSong: function(songKey) {
	 		console.log("deleteSong promise linked");


			$.ajax({
				url: "https://blinding-torch-9569.firebaseio.com/songs/" + songKey + "/.json",
				method: "DELETE"
			}).done(function(){
				console.log("https://blinding-torch-9569.firebaseio.com/songs/" + songKey + "/.json");

				deferred.resolve(songKey);

			}).fail(function(xhr, status, error){

				deferred.reject(error);
			});

		return deferred.promise;
		}

	}




});