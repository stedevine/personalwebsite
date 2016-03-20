'use strict';

function photoController($scope) {
  var photos = [];
  for (var i=1; i<8; i++){
    photos.push("./images/" + i+ ".jpg");
  }
  var photoIndex = 0;
  $scope.photoImg = photos[0];

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
