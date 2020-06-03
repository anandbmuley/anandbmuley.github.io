app.controller('ScrollToTopController', ['$scope', '$location', '$rootScope', '$window',
    function ($scope, $location, $rootScope, $window) {

        $window.scrollTo(0, 0);

    }]);
