 define(["jquery", "populate-songs", "to-dom"], 
  function($, populate, Dom) {

	// All the JavaScript that depends on jQuery will be written here
	 // var songs = [];
	 var inputArtist = $("#input-artist-name");
	 var inputSong = $("#input-song-name");
	 var inputAlbum = $("#input-album-name");
	 var songElement = $("#listOfSongs");
	 var addLink = $("#addLink");
	 var viewLink = $("#viewLink");
	 var addButton = $("#add-button");
	 var deleteAllButton = $("#delete-all-button");
	 var leftBoxHidden = $(".leftBox");
	 var rightBoxHidden = $(".rightBox");

	//Navigation Add Link make input box appear
	$(addLink).click(function(event){
		event.preventDefault();
		$("#input-box-display").removeAttr("class");
		$(leftBoxHidden).addClass("right-left-box-hidden");
		$(rightBoxHidden).addClass("right-left-box-hidden");	
		console.log("leftBoxHidden", leftBoxHidden);
	});

 	//Navigation view Link make input box disappear
	$(viewLink).click(function(event){
		event.preventDefault();
		$("#input-box-display").attr("class", "input-box-hidden");
		$(leftBoxHidden).removeClass("right-left-box-hidden");
		$(rightBoxHidden).removeClass("right-left-box-hidden");
	});

	//Adding Songs with Add button
	$(addButton).click(function(event){
		var newSongElement = "<div>";
		newSongElement += inputArtist.val();
		newSongElement += "-";
		newSongElement += inputSong.val();
		newSongElement += "-";
		newSongElement += inputAlbum.val();
		newSongElement += " ";
		newSongElement += "<button class='delete-button'>Delete</button></div>";
		songElement.append(newSongElement);
		inputArtist.val("");
		inputSong.val("");
		inputAlbum.val("");
		$("#input-box-display").attr("class", "input-box-hidden");
		$(leftBoxHidden).removeClass("right-left-box-hidden");
		$(rightBoxHidden).removeClass("right-left-box-hidden");

	});
	//Delete all button 
	$(deleteAllButton).click(function(event){
		songElement.html("");
	});
	console.log("songElement", songElement.length);

	//Deleting specific song
	$("body").click(function(event) {
  	  	if (event.target.className === "delete-button") {
		event.target.parentNode.remove();
		}
	});


});



