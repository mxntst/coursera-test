//require('app.min.js');
(function () {
    

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController ($scope) {
        
        $scope.check = function () {
            if ($scope.lunchMenu) {
                $scope.message = $scope.lunchMenu.split(",").length <= 3 ? "Enjoy!" : "Too much!";
            } else {
                $scope.message = "Please enter data first" ;
            }
        }
    };

})();