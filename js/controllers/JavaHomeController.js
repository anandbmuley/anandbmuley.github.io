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
    },
    {
      'heading':'Objects vs Classes',
      'subHeading':'Which one to use when',
      'imageUrl':'ObjectsVsClasses.png',
      'pageName':'objects-vs-classes',
      'imageCredits' : 'Created by alekksall - www.freepik.com'
    },
    {
      'heading':'Design Patterns is a Fish',
      'subHeading':'Choose Wisely',
      'imageUrl':'DesignPatternIsAFish.jpeg',
      'pageName':'design-patterns-is-fish',
      'imageCredits' : 'Created by brgfx - www.freepik.com'
    }
  ];

  $scope.loadPage = function (pageName){
    $location.path(pageName);
  }

}]);
