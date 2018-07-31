(function () {
    'use strict';
    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .directive("foundItems", FoundItemsDirective)
        .service("MenuSearchService", MenuSearchService)
        .constant("MenuItemsUrl", "https://davids-restaurant.herokuapp.com/menu_items.json");     
    
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: "E",
            scope: {
                items: '<foundItems',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'found',
            bindToController: true
        };
        return ddo;    
    } 

    function FoundItemsDirectiveController() {
    }

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this
        ctrl.found = [];
        ctrl.predicate = "";
        ctrl.narrow = function() {
            MenuSearchService.getMatchedMenuItems(ctrl.predicate)
            .then(function (foundItems) {
                ctrl.found = foundItems;
            })
            .catch(function(e) { console.error(e);})
        }
        ctrl.removeItem = function(itemIndex) {
            ctrl.found.splice(itemIndex,1);
        }
        
    }

    MenuSearchService.$inject = ["$http", "MenuItemsUrl"];
    function MenuSearchService($http, MenuItemsUrl) {
        var service = this;
        service.getMatchedMenuItems = function (predicateStr) {
            return $http({
                url: MenuItemsUrl
            })
            .then(function (response) {
                return response.data.menu_items
                .filter(function (o){
                    return o.description.indexOf(predicateStr) >= 0;
                });
            })
        }    
    }

})();