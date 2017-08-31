var app = angular.module('AppTech',['ngMaterial','ngRoute']);

app.config(['$routeProvider',function($routeProvider){

  $routeProvider.when('/',{
    templateUrl:'views/HomePage.html',
    controller : 'HomePageController'
  }).when('/home',{
    redirectTo : '/'
  }).when('/java',{
    templateUrl:'views/java/JavaHome.html',
    controller : 'JavaHomeController'
  }).when('/object-oriented',{
    templateUrl:'views/java/ObjectOrientedProgramming.html'
  }).when('/object-modelling',{
    templateUrl:'views/java/ObjectModelling.html'
  });

}]);
