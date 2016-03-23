var wop = angular.module('wop',
['ui.router', 
    'ngAnimate', 
    'ngAria', 
    'ngMessages', 
    'ngMaterial'
]);

wop.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    .state('login', {
      url: "/login",
     //templateUrl: "partials/state1.html"
    })
    .state('/', {
      url: "/",
      templateUrl: "templates/home.html",
      controller: 'homeCtrl'
    })
    .state('addPlayers', {
      url: "/addplayers",
      templateUrl: "templates/addPlayers.html"
    })
//    .state('state2.list', {
//      url: "/list",
//      templateUrl: "partials/state2.list.html",
//      controller: function($scope) {
//        $scope.things = ["A", "Set", "Of", "Things"];
//      }
//    });
}])
.config(function($mdIconProvider) {
  $mdIconProvider.fontSet('fa', 'fontawesome');
});
	