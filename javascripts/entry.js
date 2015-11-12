requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min"
  },
  shim : {
        "bootstrap" : { "deps" :['jquery'] }
    }
});

require(
  //every file that is being used should be entried here; exepct the json files.
  
  ["bootstrap", "musicHistory_v06", "populate-songs", "add-song", "to-dom", "filter", "delete-songs"], 
  //^these are dependencies^

  //the dependencies get passed as arguments into the function.
  function (b, musicHistory, populate, addSong, toDom, filter, deleteSongs) {

    //call the fuction inside first argument.

    
    populate.songData(toDom.toDomData);
    //each module is an island for one job only.
    //loopFuction is in its own file to place the songs in the dom.
    
  
 });