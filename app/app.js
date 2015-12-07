var app = angular.module("app", ['ngRoute', 'firebase']);

//route provider contains paths to controllers to bind to Dom.
app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/songs/list', {
			templateUrl: "../partials/song-list.html",
			controller: "songControl"
			})
		.when('/songs/add', {
			templateUrl: "../partials/song-add.html",
			controller: "songControl"
			});
	}]);
