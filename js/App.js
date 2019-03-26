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
  }).when('/object-oriented-design',{
    templateUrl:'views/java/ObjectOrientedProgramming.html'
  }).when('/about-me',{
    templateUrl:'views/AboutMe.html'
  });

}]);
