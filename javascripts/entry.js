requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "q": "../lib/bower_components/q/q"
  },
  shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "firebase": { exports: "Firebase" }
    }
});

requirejs(
  //every file that is being used should be entried here; exepct the json files.
  
  ["jquery", "bootstrap", "musicHistory_v06", "populate-songs", "add-song", "to-dom", "filter", "delete-songs"], 
  //^these are dependencies^

  //the dependencies get passed as arguments into the function.
  function($, b, musicHistory, populate, addSong, toDom, filter, deleteSongs) {

 

 });







