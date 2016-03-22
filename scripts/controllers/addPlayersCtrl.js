wop.controller('addPlayersCtrl', ['$scope',function($scope) {
        $scope.players = [];
        
        $scope.add = function() {
            $scope.players.push({name: $scope.player});
            $scope.player = {};
        }
}]);