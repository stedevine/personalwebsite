function pageController($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation == $location.path();
  }
}

angular
  .module('app')
  .controller('pageController', ['$scope', '$location', pageController]);
