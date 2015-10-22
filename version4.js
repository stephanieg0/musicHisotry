 var songs = [];
 var inputArtist = document.getElementById("input-artist-name");
 var inputSong = document.getElementById("input-song-name");
 var inputAlbum = document.getElementById("input-album-name");
 var songElement = document.getElementById("listOfSongs");
 var addLink = document.getElementById("addLink");
 var viewLink = document.getElementById("viewLink");
 var addButton = document.getElementById("add-button");


//Navigation Links make input box appear
addLink.addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("input-box-display").removeAttribute("class");
});

viewLink.addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("input-box-display").setAttribute("class", "input-box-hidden");
});

//Adding Songs with Add button
addButton.addEventListener("click", function(event){
	var newSongElement = "<div>"
	newSongElement += inputArtist.value;
	newSongElement += " ";
	newSongElement += inputSong.value;
	newSongElement += " ";
	newSongElement += inputAlbum.value;
	newSongElement += "</div>"
	songElement.innerHTML += newSongElement;
	inputArtist.value = "";
	inputSong.value = "";
	inputAlbum.value = "";
});









