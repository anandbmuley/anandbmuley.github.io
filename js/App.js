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
  }).when('/research',{
    templateUrl : 'views/research/ResearchHome.html',
    controller: 'ResearchHomeController'
  }).when('/java/object-oriented-design',{
    templateUrl:'views/java/ObjectOrientedProgramming.html',
    controller: 'ScrollToTopController'
  }).when('/java/let-code-do-the-talking',{
    templateUrl:'views/java/let-code-do-the-talking/Home.html',
    controller : 'LetCodeDoTheTalking'
  }).when('/java/let-code-do-the-talking/domain-modelling',{
    templateUrl : 'views/java/let-code-do-the-talking/DomainModelling.html',
    controller: 'LetCodeDoTheTalking'
  }).when('/java/objects-vs-classes',{
    templateUrl : 'views/java/ObjectsVsClasses.html',
    controller: 'ScrollToTopController'
  }).when('/java/design-patterns-is-fish',{
    templateUrl: 'views/java/research/DesignPatternsIsAFish.html',
    controller: 'ScrollToTopController'
  }).when('/general',{
    templateUrl: 'views/general/GeneralHome.html',
    controller : 'GeneralHomeController'
  }).when('/general/evolution-of-languages',{
    templateUrl : 'views/general/EvolutionOfProgrammingLanguages.html',
    controller: 'ScrollToTopController'
  }).when('/general/entrusted-freedom-on-developers',{
    templateUrl: 'views/general/EntrustedFreedomOnDevelopers.html',
    controller: 'ScrollToTopController'
  }).when('/general/charity-at-workplace',{
    templateUrl : 'views/general/CharityAtWorkplace.html',
    controller: 'ScrollToTopController'
  }).when('/general/content-duplication-on-internet',{
    templateUrl : 'views/general/ContentDuplicationOnInternet.html',
    controller: 'ScrollToTopController'
  }).when('/general/centralised-object-creation',{
    templateUrl : 'views/general/CentralisedObjectCreation.html',
    controller: 'ScrollToTopController'
  }).when('/research/history-of-programming-paradigm',{
    templateUrl : 'views/research/HistoryOfProgramminParadigm.html',
    controller: 'ScrollToTopController'
  })
  .when('/about-me',{
    templateUrl:'views/AboutMe.html'
  });

}]);
