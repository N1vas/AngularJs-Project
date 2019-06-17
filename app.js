(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController );

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchmenu = "";
        $scope.data = "";

        $scope.namethem = function () {

            var nivas = $scope.lunchmenu.split(',');

            if(nivas == "") {
                $scope.data = "Please enter the data";
            }
            else if(nivas.length <= 3) {
                $scope.data = "Enjoy!";
                console.log($scope.data);
            }
            else if(nivas.length >= 4) {
                $scope.data = "Too Much";
            }

        };

    }
   
    
    })();
    