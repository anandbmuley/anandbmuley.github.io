app.controller('JavaHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'Object Oriented Design',
      'subHeading':'Thinking in terms of objects',
      'imageUrl':'object_oriented.jpg',
      'route':'/java/object-oriented-design',
      'imageCredits' : 'Created by D3images - Freepik.com'
    },
    {
      'heading':'Let code do the talking',
      'subHeading':'Thinking in terms of objects',
      'imageUrl':'laptop.jpg',
      'route':'/java/let-code-do-the-talking',
      'imageCredits' : 'Created by fullvector - Freepik.com'
    },
    {
      'heading':'Objects vs Classes',
      'subHeading':'Which one to use when',
      'imageUrl':'ObjectsVsClasses.png',
      'route':'/java/objects-vs-classes',
      'imageCredits' : 'Created by alekksall - www.freepik.com'
    },
    {
      'heading':'Design Pattern is a Fish',
      'subHeading':'Learn to Design a Pattern',
      'imageUrl':'DesignPatternIsAFish.jpeg',
      'route':'/java/design-patterns-is-fish',
      'imageCredits' : 'Created by brgfx - www.freepik.com'
    }
  ];

  $scope.loadPage = function (route){
    $location.path(route);
  }

}]);
