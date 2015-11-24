 define(["jquery", "populate-songs","add-song", "delete-songs", "to-dom"], 
  function($, populate, addSong, delete_song, toDom) {

	// All the JavaScript that depends on jQuery will be written here
	var songElement = $("#listOfSongs");
	//Ids for my nav links
	var addLink = $("#addLink");
	var viewLink = $("#viewLink");
	//id for the input box section
	var addButton = $("#add-button");
	//ids for my main boxes sections to hide and unhide.
	var leftBoxHidden = $(".leftBox");
	var rightBoxHidden = $(".rightBox");
	//delete all button id
	var deleteAllButton = $("#delete-all-button");

	//Navigation Add Link make input box appear
	$(addLink).click(function(event){
		// console.log("add link works");
		event.preventDefault();
		$("#input-box-display").removeAttr("class");
		$(leftBoxHidden).addClass("right-left-box-hidden");
		$(rightBoxHidden).addClass("right-left-box-hidden");	
		
	});

 	//Navigation view Link make input box disappear
	$(viewLink).click(function(event){
		// console.log("view link works");
		event.preventDefault();
		$("#input-box-display").attr("class", "input-box-hidden");
		$(leftBoxHidden).removeClass("right-left-box-hidden");
		$(rightBoxHidden).removeClass("right-left-box-hidden");		
	});

	//Adding Songs with Add button
	$(addButton).click(function(event){
		console.log("add button works");
		event.preventDefault();

		//calling promise in the add-song file
		addSong.postSong()
		.then(function(){
			console.log("promise kept!");
		}).fail(function(){
			console.log("promise error");
		});

		//reseting the input boxes to empty
		$("#input-song-name").val("");
		$("#input-artist-name").val("");
		$("#input-album-name").val("");
		//changing the display/hidden classes
		$("#input-box-display").attr("class", "input-box-hidden");
		$(leftBoxHidden).removeClass("right-left-box-hidden");
		$(rightBoxHidden).removeClass("right-left-box-hidden");
		
	});

	//Deleting specific song
	$(document).on("click", ".delete-button", function(event) {
		console.log("delete button works");
		//assigning this id from firebase to songKey variable to pass to function.
		var songKey = $(this).attr("id");
		 	console.log("songKey", songKey);
		 //calling my delete function and passing the specific id.
		delete_song.deleteSong(songKey)
		.then(function(){
			console.log("delete promise kept");
		})
		.fail(function(){
			console.log("error", error);
		});


	});


	//Delete all button 
	$(deleteAllButton).click(function(){
		// console.log("buttons all button works");
		songElement.html("");
	});



});



