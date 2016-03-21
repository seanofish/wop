var wop = angular.module('wop',['ui.router']);

wop.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    .state('login', {
      url: "/login",
     //templateUrl: "partials/state1.html"
    })
    .state('/', {
      url: "/",
      templateUrl: "template/home.html",
      controller: "homeCtrl"
    })
//    .state('state2', {
//      url: "/state2",
//      templateUrl: "partials/state2.html"
//    })
//    .state('state2.list', {
//      url: "/list",
//      templateUrl: "partials/state2.list.html",
//      controller: function($scope) {
//        $scope.things = ["A", "Set", "Of", "Things"];
//      }
//    });
}]);
	