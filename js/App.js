var app = angular.module('AppTech',['ngMaterial','ngRoute']);

app.config(['$routeProvider',function($routeProvider){

  $routeProvider.when('/',{
    templateUrl:'views/LandingPage.html',
    controller : 'LandingPageController'
  }).when('/home',{
    templateUrl: 'views/HomePage.html',
    controller : 'HomePageController'
  }).when('/java',{
    templateUrl:'views/java/JavaHome.html',
    controller : 'JavaHomeController'
  }).when('/object-oriented-design',{
    templateUrl:'views/java/ObjectOrientedProgramming.html'
  }).when('/let-code-do-the-talking',{
    templateUrl:'views/java/let-code-do-the-talking/Home.html',
    controller : 'LetCodeDoTheTalking'
  }).when('/let-code-do-the-talking/domain-modelling',{
    templateUrl : 'views/java/let-code-do-the-talking/DomainModelling.html'
  }).when('/objects-vs-classes',{
    templateUrl : 'views/java/ObjectsVsClasses.html'
  })
  .when('/about-me',{
    templateUrl:'views/AboutMe.html'
  });

}]);
