define(["jquery", "populate-songs", "to-dom"], function($, populate, toDom) {

	var addButton = $("#add-button");
	var leftBoxHidden = $(".leftBox");
	var rightBoxHidden = $(".rightBox");

	//Adding Songs with Add button
	$(addButton).click(function(event){
		console.log("button works");

		event.preventDefault();

		var newSongElement = {
			songs: {
				title: $("#input-song-name").val(),
				artist: $("#input-artist-name").val(),
				album: $("#input-album-name").val()
				}
				
			};
		console.log("newSongElement", newSongElement);
		
		$.ajax({
			url: "https://blinding-torch-9569.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSongElement.songs)
			}).done(function(){
				//need the dependencies to re populate the dom as the entry.js
				populate.songData(toDom.toDomData);
				console.log("newSongElement", newSongElement.songs);

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
});

