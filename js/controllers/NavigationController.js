app.controller('NavigationController',['$scope','$location','$rootScope',
          function($scope,$location,$rootScope){

  $scope.currentNavItem = 'home';
  $rootScope.isLandingPage = true;

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
    $rootScope.isLandingPage = false;
    $location.path(pageName);
  }

}]);
