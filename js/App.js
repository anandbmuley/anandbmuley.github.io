var app = angular.module('AppTech',['ngMaterial','ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  
  $routeProvider.when('/',{
    templateUrl:'views/HomePage.html',
    controller : 'HomePageController'
  }).when('/home',{
    redirectTo : '/'
  });

}]);
