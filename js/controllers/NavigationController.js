app.controller('NavigationController',['$scope','$location',function($scope,$location){

  $scope.currentNavItem = 'home';

  $scope.navigations = [
    {
      displayName : "Home",
      navUrl      : "home"
    },
    {
      displayName : "Java",
      navUrl      : "java"
    },
    {
      displayName : "About Me",
      navUrl      : "about-me"
    }
  ];

  $scope.goto = function(pageName){
    $location.path(pageName);
  }

}]);
