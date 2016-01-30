var app = angular.module("computer", ['ngRoute']) //DIRECTIVE to the whole app with [] of dependencies

.config(['$routeProvider', function($routeProvider) { //injecting $routeProvider into the app function
        $routeProvider. //now we can create routes witch will give us access to different controllers
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl' // in this directive will be MainCtrl controller
        }).
        when('/about', {
            templateUrl: 'about.html',
            controller: 'MainCtrl'
        }).
        when('/services', {
            templateUrl: 'services.html',
            controller: 'ServicesCtrl'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).
        otherwise({
            redirectTo: '/main'
        })
    }]) // we need to create the controller, so we will remove ; from here and continue with the . 


.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('services.json').then(function(response) {
        $scope.services = response.data; //or console.log(response); - to test (in the console)
    }); // here we making http request to get the json file
}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('services.json').then(function(response) {
        $scope.services = response.data; //or console.log(response); - to test (in the console)
    }); // here we making http request to get the json file
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('locations.json').then(function(response) {
        $scope.locations = response.data; //or console.log(response); - to test (in the console)
    }); // here we making http request to get the json file
}]);
