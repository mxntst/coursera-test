(function () {
    'use strict';
    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .directive("foundItems", FoundItemsDirective)
        .service("MenuSearchService", MenuSearchService);     
    
    function FoundItemsDirective() {
        var dod = {
            scope: {
                items: "<foundItems"
            },
            onRemove: '&',
            controller: FoundItemsDirectiveController,
            controllerAs: "found",
            bindToController: true,  
            restrict: "E",
            templateUrl : 'foundItems.html',
        }
        return dod;
    } 

    function FoundItemsDirectiveController() {
        var ctrl = this;
        console.log("FoundItemsController", this)
        //return this;
       /* ctrl.onRemove = function(arg) {
            console.log(arg)
        } */
    }

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
        ctrl.removeItem = function(itemIndex) {
            console.log("narrow controller", itemIndex);
            console.log("this", this)
            ctrl.found.splice(itemIndex,1);
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