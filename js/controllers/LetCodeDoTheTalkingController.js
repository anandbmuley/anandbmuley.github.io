app.controller('LetCodeDoTheTalking',['$scope','$location',
    function($scope,$location) {

  $scope.useCases = [
    {
      'name' : 'Domain Modelling',
      'subHeading' : 'Model the reality',
      'route' : 'let-code-do-the-talking/domain-modelling',
      'imageName' : 'virtual-reality.jpg',
      'imageCredits' : 'katemangostar - www.freepik.com',
      'altText' : 'Virtual Reality',
      'imageCreditColor' : 'white'
    }
  ];

  $scope.loadPage = function (pageName){
    $location.path(pageName);
  }

}]);
