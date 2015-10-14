/* Students must use JavaScript to create a list of songs in the index.html file for their Music History project. 
Have them download the songs.js file, which contains an array of strings with song information.

Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.
*/


 var songs = [];
 var songElement = document.getElementById ("listOfSongs", "listOfSongs2", "listOfSongs3");


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Skater *boy by Avril Lavigne");
songs.push("Baby one more *time by Britney Spears");


 for (var i = 0; i < songs.length; i++) {
 	var songOutput = songs[i];

	
 	songOutput = songOutput.replace("*", "");	
 	songOutput = songOutput.replace(">", "");	
 	songOutput = songOutput.replace("@", "");	
 	songOutput = songOutput.replace("!", "");
 	songOutput = songOutput.replace("(", "");	

 	var songOutput = "<div>" + songOutput + "</div>";

 	songElement.innerHTML = songElement.innerHTML + songOutput;

 	console.log(songOutput);
 }




