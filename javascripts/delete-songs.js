define(["jquery", "populate-songs", "to-dom"],function($, populate, toDom){

	var Firebase = function(){

	}

	var songElement = $("#listOfSongs");

	//ids for my delete from dom button.
	var deleteAllButton = $("#delete-all-button");
	 
	var currentRemoved;
	//made a newObject with correstponding keys from the array.
	var currentRemovedObject = {
	 	songs: {

	 	}
	 };

	//Delete all button 
	$(deleteAllButton).click(function(){
		console.log("buttons all button works");
		songElement.html("");
	});
	



	//Deleting specific song
	$(document).on("click", ".delete-button", function(event) {
		var songKey = $(this).attr("id");

		console.log("https://blinding-torch-9569.firebaseio.com/songs/" + songKey + "/.json");
		// return;

		$.ajax({
			url: "https://blinding-torch-9569.firebaseio.com/songs/" + songKey + "/.json",
			method: "DELETE"
		}).done(function(){
			populate.songData(toDom.toDomData);
			console.log("song deleted");
		})


	});
	

	//split the array into two to get the "baby one more time key" and compare this value to the key in the 
	//object from the json file inside firebase. 


});