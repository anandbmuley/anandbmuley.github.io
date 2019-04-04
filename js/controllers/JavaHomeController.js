app.controller('JavaHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'Object Oriented Design',
      'subHeading':'Thinking in terms of objects',
      'imageUrl':'object_oriented.jpg',
      'pageName':'object-oriented-design',
      'imageCredits' : 'Created by D3images - Freepik.com'
    },
    {
      'heading':'Let code do the talking',
      'subHeading':'Thinking in terms of objects',
      'imageUrl':'laptop.jpg',
      'pageName':'let-code-do-the-talking',
      'imageCredits' : 'Created by fullvector - Freepik.com'
    }
  ];

  $scope.loadPage = function (pageName){
    $location.path(pageName);
  }

}]);
