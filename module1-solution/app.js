//require('app.min.js');
(function () {
    

    angular.module('EaterApp', [])
    .controller('EaterController', EaterController);
    
    EaterController.$inject = ["$scope"];
    function EaterController ($scope) {
        
        $scope.check = function () {
            if ($scope.lunchMenu) {
                $scope.message = $scope.lunchMenu.split(",").length <= 3 ? "Enjoy!" : "Too much!";
            } else {
                $scope.message = "Please enter data first" ;
            }
        }
    };

})();