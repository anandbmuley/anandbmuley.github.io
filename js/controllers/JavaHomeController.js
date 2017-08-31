app.controller('JavaHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'Object Oriented Programming',
      'subHeading':'Thinking in terms of objects',
      'imageUrl':'object_oriented.jpg',
      'pageName':'object-oriented',
      'imageCredits' : 'Created by D3images - Freepik.com'
    },
    {
      'heading':'Object Modelling',
      'subHeading':'Learn to model',
      'imageUrl':'object_modelling.jpg',
      'pageName':'object-modelling',
      'imageCredits':'Created by Vvstudio - Freepik.com'
    }
  ];

  $scope.loadPage = function (pageName){
    $location.path(pageName);
  }

}]);
