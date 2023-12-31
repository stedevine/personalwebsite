'use strict';

function photoController($scope) {
  console.log("Photo Controller")
  var photos = [];
  for (var i=1; i<8; i++){
    photos.push("./images/" + i+ ".jpg");
  }
  var photoIndex = 1;
  $scope.photoImg = photos[photoIndex];

  $scope.setPhoto = function() {

    if (photoIndex < 6){
      photoIndex++;
    }else {
      photoIndex = 0;
    }
    $scope.photoImg = photos[photoIndex];
  }
}

angular
  .module('app')
  .controller('photoController', ['$scope', photoController]);
