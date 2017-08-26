app.controller('NavigationController',['$scope','$location',function($scope,$location){

  $scope.currentNavItem = 'home';

  $scope.goto = function(pageName){
    $location.path(pageName);
  }

}]);
