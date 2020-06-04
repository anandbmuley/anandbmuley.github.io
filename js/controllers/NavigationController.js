app.controller('NavigationController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {

    $scope.currentNavItem = 'home';

    function identifyUrl() {
      if ($location.url() === '/') {
        $rootScope.isLandingPage = true;
      } else {
        $rootScope.isLandingPage = false;
      }
    }

    identifyUrl();

    $scope.navigations = [
      {
        displayName: "Home",
        navUrl: "home"
      },
      {
        displayName: "Java",
        navUrl: "java"
      },
      {
        displayName: "General",
        navUrl: "general"
      },
      {
        displayName: "Research",
        navUrl: "research"
      },
      {
        displayName: "CODE",
        navUrl: "code"
      },
      {
        displayName: "About Me",
        navUrl: "about-me"
      }
    ];

    $scope.goto = function (pageName) {
      $rootScope.isLandingPage = false;
      $location.path(pageName);
    }

  }]);
