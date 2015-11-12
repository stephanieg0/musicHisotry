define(["jquery", "hbs"], function($, hbs){

	return {
		//function to send songs to dom
		toDomData: function (songData) {
			console.log("songData from toDom", songData);
			//replaced my loop for a require hbs dependency and function to append to dom.
			//hbs has an #each tag that makes a loop.
			require(["hbs!../templates/songs"], function (songTemplate) {
			    $("#listOfSongs").html(songTemplate(songData));
			    console.log("songTemplate(songData)", songTemplate(songData));

			  });

			//***** sending to dropdown only ******
			//added a handlebar file to place artist on the dropdown.
			require(["hbs!../templates/artist"], function (songTemplate) {
				//should append from the same json file but only the artist which is specified in the handlebars file.
			    $("#artist-dropdown").html(songTemplate(songData));


			  });
			//added a handlebar file to place album on the dropdown.
			require(["hbs!../templates/album"], function (songTemplate) {
	
			    $("#album-dropdown").html(songTemplate(songData));

			  });

		}
	}
});