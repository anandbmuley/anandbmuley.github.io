app.controller('CodeHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'Libraries',
      'subHeading':'Complete Developer Control',
      'items' : [
        {
          "name" : "authenticator",
          "repoLink" : "https://github.com/anandbmuley/authenticator"
        }
      ]
    },
    {
      'heading':'Frameworks',
      'subHeading':'Little Developer Control',
      'imageUrl':'object_oriented.jpg',
      'route':'/java/object-oriented-design',
      'imageCredits' : 'Created by D3images - Freepik.com'
    },
    {
      'heading':'Products',
      'subHeading':'Solving Real Life Problems',
      'imageUrl':'object_oriented.jpg',
      'route':'/java/object-oriented-design',
      'imageCredits' : 'Created by D3images - Freepik.com'
    }
  ];

  $scope.loadPage = function (route){
    $location.path(route);
  }

}]);
