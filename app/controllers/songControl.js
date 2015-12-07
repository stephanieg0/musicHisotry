app.controller("songControl", ["$scope", "$firebaseArray", 
	function ($scope, $firebaseArray) {

	console.log("song control is linked");

	//populating the dom with firebase data
	var ref = new Firebase("https://blinding-torch-9569.firebaseio.com/songs");
	//assign the firebaseArray method into the scope variable.
	$scope.songs = $firebaseArray(ref);

	console.log("songs", $scope.songs);



	$scope.deleteSong = function (singleSong){
		console.log("singleSong", singleSong);

		var songsIndex = $scope.songs.indexOf(singleSong);
		console.log("songsIndex", songsIndex);

		//taking off the array.
		// $scope.songs.splice(songsIndex, 1);
		$scope.songs.$remove(songsIndex, 1);
	};

	$scope.addSong = function (artist, title, album){
		var currentArtist = artist;
		var currentTitle = title;
		var currentAlbum = album;

		$scope.songs.$add({
			album: currentAlbum,
			artist: currentArtist,
			title: currentTitle
		});

		console.log("added button", artist, title, album);
	};

	$scope.hideAll = function (songs) {
		$scope.songs = [];
	}

	$scope.filterSong = function (songArtist, songAlbum) {
		console.log("songArtist", songArtist);
		console.log("songAlbum", songAlbum);
	}

}]);