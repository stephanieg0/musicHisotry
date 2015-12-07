app.factory("songStorage", ["$q", "$http", function($q, $http){

	console.log("songStorage is linked");

	//need to define variable here to be able to be accessed by the controller.
	var song_list;

	//making a function that returns a promise.
	function loadSongs() {

		return $q(function(resolve, reject) {
				  $http.get('data/songs.json')
				  .success(
				    function(songsObject) {
				    	console.log("original songsObject", songsObject);
				    	//converting the object into an array
				    	song_list = Object.keys(songsObject.songs).map(song => songsObject.songs[song]);

				      	resolve(song_list);
				    	console.log("new song_list", song_list);
				    }, 
				    function(error) {
				      reject(error);
				    }
				  );
				});
		};

	// Store the promise as a private variable
	var promiseFunction = loadSongs();

	return {
		loadSongs: function () {

			return promiseFunction;
		},

		getSongs: function () {
			console.log("song_list", song_list);
			//making my private variable available to the controller.
			return song_list;
		}

	}


}]);