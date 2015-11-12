 define(["jquery", "populate-songs", "to-dom"], 
  function($, populate, toDom) {

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
	

	//Navigation Add Link make input box appear
	$(addLink).click(function(event){
		event.preventDefault();
		$("#input-box-display").removeAttr("class");
		$(leftBoxHidden).addClass("right-left-box-hidden");
		$(rightBoxHidden).addClass("right-left-box-hidden");	
		console.log("leftBoxHidden", leftBoxHidden);
		console.log("link works");
		console.log("songElement", songElement);
	});

 	//Navigation view Link make input box disappear
	$(viewLink).click(function(event){
		event.preventDefault();
		$("#input-box-display").attr("class", "input-box-hidden");
		$(leftBoxHidden).removeClass("right-left-box-hidden");
		$(rightBoxHidden).removeClass("right-left-box-hidden");		
	});




});



