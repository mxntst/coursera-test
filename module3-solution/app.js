(function () {
    'use strict';
    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService);  

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this
        ctrl.found = [];
        ctrl.predicate = "";
        ctrl.narrow = function() {
            MenuSearchService.getMatchedMenuItems(ctrl.predicate)
            .then(function (foundItems) {
                console.log("foundItems", foundItems)
                ctrl.found = foundItems;
            })
            .catch(function(e) { console.error(e);})
        }
        
    }

    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function (predicateStr) {
            return $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            })
            .then(function (response) {
                console.log(response.data);
                return response.data.menu_items
                .filter(function (o){
                    return o.description.indexOf(predicateStr) >= 0;
                });
            })
        }    
    }



})();