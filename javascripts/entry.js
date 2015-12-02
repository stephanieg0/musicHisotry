requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim : {
        "bootstrap" : { "deps" :['jquery'] }
    }
});

require(
  //every file that is being used should be entried here; exepct the json files.
  //the musicHistory file is being refenced in the "data-main" script tag.
  ["bootstrap", "musicHistory_v06", "populate-songs", "get-more-songs", "to-dom"], 
  //^these are dependencies^

  //the dependencies get passed as arguments into the function.
  function (b, musicHistory, first, second, toDomFunction) {

    //call the fuction inside first and second arguments.
    first.songData(toDomFunction.toDomData);
    console.log("first.songData", first.songData);
    second.songData(toDomFunction.toDomData);
    //each module is an island for one job only.
    //place the loop to grab songs in here that will be used for both ajax modules ""
    //you can place the loop in its own file to place the songs in the dom.
 });