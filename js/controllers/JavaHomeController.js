app.controller('JavaHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'Object Oriented Design',
      'subHeading':'Thinking in terms of objects',
      'imageUrl':'object_oriented.jpg',
      'pageName':'object-oriented-design',
      'imageCredits' : 'Created by D3images - Freepik.com'
    }
  ];

  $scope.loadPage = function (pageName){
    $location.path(pageName);
  }

}]);
