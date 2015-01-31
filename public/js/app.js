// Firebase connection
// var myDataRef = new Firebase('https://glaring-torch-5894.firebaseio.com/');
$(document).ready(function(){
//   jQuery.getJSON("https://glaring-torch-5894.firebaseio.com/.json", function(json){
//     console.log(json);
//   });

//   $('.login').click(function(){
//     twitterAuthentication();
//   });

});

function twitterAuthentication() {
  myDataRef.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
}

var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("SampleCtrl", function($scope, $firebase) {

  var ref = new Firebase("https://glaring-torch-5894.firebaseio.com/");
  var sync = $firebase(ref);

  // download the data into a local object
  var syncObject = sync.$asObject();

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});

myApp.controller("ViewJob", function($scope, $firebase){  
  var ref = new Firebase("https://glaring-torch-5894.firebaseio.com/"); 
  jQuery.getJSON("https://glaring-torch-5894.firebaseio.com/.json", function(json){
      $scope.postData = json
      console.log(json);
  });
})

myApp.controller("AddJob", function($scope, $firebase) {
  var ref = new Firebase("https://glaring-torch-5894.firebaseio.com/");
  var jobTitle = $('#title');
  var jobLocation = $('#location');
  var jobDescription = $('#description');
  $('#addJobBtn').click(function() {
    ref.push({title: jobTitle.val(), location: jobLocation.val(), description: jobDescription.val()});
  })
})
