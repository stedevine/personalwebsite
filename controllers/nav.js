function navController($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation == $location.path();
  }
}

angular
  .module('app')
  .controller('navController', ['$scope', '$location', navController]);
