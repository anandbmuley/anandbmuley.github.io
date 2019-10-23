app.controller('ResearchHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'History of Programming Paradigm',
      'subHeading':'A change is gradual',
      'imageUrl':'Programming.jpeg',
      'route':'research/history-of-programming-paradigm',
      'imageCredits' : 'Created by Freepik - www.freepik.com'
    }
  ];

  $scope.loadPage = function (route){
    $location.path(route);
  }

}]);
