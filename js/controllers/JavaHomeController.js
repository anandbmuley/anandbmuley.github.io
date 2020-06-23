app.controller('JavaHomeController', ['$scope', '$location',
  function ($scope, $location) {

    $scope.topics = [
      {
        'heading': 'Hiding badly Designed MicroService',
        'subHeading': 'Worst reality of MicroServices',
        'imageUrl': 'java/OldWoodenHouse.jpg',
        'route': '/java/hiding-badly-designed-microservice',
        'imageCredits': 'Created by brgfx - Freepik.com'
      },
      {
        'heading': 'Advanced Builder',
        'subHeading': 'Higher Order Functions',
        'imageUrl': 'java/BuildingConstruction.jpg',
        'route': '/java/advanced-builder',
        'imageCredits': 'Created by Freepik - Freepik.com'
      },
      {
        'heading': 'Object Oriented Design',
        'subHeading': 'Thinking in terms of objects',
        'imageUrl': 'object_oriented.jpg',
        'route': '/java/object-oriented-design',
        'imageCredits': 'Created by D3images - Freepik.com'
      },
      {
        'heading': 'Let code do the talking',
        'subHeading': 'Code speaks for itself',
        'imageUrl': 'laptop.jpg',
        'route': '/java/let-code-do-the-talking',
        'imageCredits': 'Created by fullvector - Freepik.com'
      },
      {
        'heading': 'Objects vs Classes',
        'subHeading': 'Which one to use when',
        'imageUrl': 'ObjectsVsClasses.jpg',
        'route': '/java/objects-vs-classes',
        'imageCredits': 'Created by alekksall - www.freepik.com'
      },
      {
        'heading': 'Design Pattern is a Fish',
        'subHeading': 'Learn to Design a Pattern',
        'imageUrl': 'DesignPatternIsAFish.jpeg',
        'route': '/java/design-patterns-is-fish',
        'imageCredits': 'Created by brgfx - www.freepik.com'
      },
      {
        'heading': 'Data Types',
        'subHeading': 'Basic and Advanced',
        'imageUrl': 'java/BuildingMaterials.jpg',
        'route': '/java/data-types',
        'imageCredits': 'Created by bpch.vector - www.freepik.com'
      },
      {
        'heading': 'Final Class',
        'subHeading': 'Class Design Indicator',
        'imageUrl': 'java/3d-check-box.jpg',
        'route': '/java/final-class',
        'imageCredits': 'Created by bpch.vector - www.freepik.com'
      }
    ];

    $scope.loadPage = function (route) {
      $location.path(route);
    }

  }]);
