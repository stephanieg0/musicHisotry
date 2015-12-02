define(["jquery"], function($){

	return {
		
		songData: function(callBackFunction){

			$.ajax({url: "data/more-songs.json"}).done(callBackFunction);
		}
	}

});