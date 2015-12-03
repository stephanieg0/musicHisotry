var app = angular.module("musicHistApp", []);


app.controller("musicHistCtrl", ["$q", "$http", "$scope", "$sce", function($q, $http, $scope, sce){
	console.log("angular is working");

	var getSongs = $q(function(resolve, reject) {
	  $http.get('data/songs.json')
	  .success(
	    function(songs) {
	    	console.log("json file was successful", songs);
	      resolve(songs.songs);
	    }, 
	    function(error) {
	      reject(error);
	    }
	  );
	});


	$scope.ajaxCall = getSongs.then(function(songs){
		console.log("songs in promise", songs);
		console.log("songs length", songs.length);

		var newSongs = "";
		
		for (var i = 0; i < songs.length; i++){
				newSongs += "<div>" + 
				songs[i].title + " " +
				songs[i].artist + " " +
				songs[i].album + " " +
				"<button class='delete-button'>Delete</button></div>";
				console.log(newSongs);
			}

		$scope.listOfSongs = sce.trustAsHtml(newSongs);

	}, function(error){
		console.log("error");
	});


	
	

}]);