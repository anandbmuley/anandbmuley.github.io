app.controller('GeneralHomeController',['$scope','$location',
  function($scope,$location){

  $scope.topics = [
    {
      'heading':'Evolution of Programming Languages',
      'subHeading':'A change is gradual',
      'imageUrl':'EvolutionOfLanguages.jpeg',
      'route':'general/evolution-of-languages',
      'imageCredits' : 'Created by freepik - www.freepik.com'
    },
    {
      'heading':'Entrusted Freedom on Developers',
      'subHeading':'Developer\'s Responsibility',
      'imageUrl':'DevelopersResponsibility.jpeg',
      'route':'general/entrusted-freedom-on-developers',
      'imageCredits' : 'Created by katemangostar - www.freepik.com'
    },
    {
      'heading':'Charity at Workplace',
      'subHeading':'Help and forget that you helped',
      'imageUrl':'Charity.jpeg',
      'route':'general/charity-at-workplace',
      'imageCredits' : 'Created by Freepik - www.freepik.com'
    },
    {
      'heading':'Content Duplication on Internet',
      'subHeading':'Save E-Resources',
      'imageUrl':'SaveEResources.jpeg',
      'route':'general/content-duplication-on-internet',
      'imageCredits' : 'Infographic vector created by Freepik'
    },
    {
      'heading':'Centralised Object Creation',
      'subHeading':'True Factory Pattern',
      'imageUrl':'Factory.jpeg',
      'route':'general/centralised-object-creation',
      'imageCredits' : 'Created by Freepik - www.freepik.com'
    }
  ];

  $scope.loadPage = function (pageName){
    $location.path(pageName);
  }

}]);
