(function () {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    
    
    function ToBuyController (ShoppingListCheckOffService) {
        var toBuy = this
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.bought = function (item) {
            ShoppingListCheckOffService.bought(item);
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items =  ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyList = [
            {name: "Bread", quantity: 1},
            {name: "Milk", quantity: 2},
            {name: "Apple", quantity: 4},
            {name: "Orange", quantity: 8},
            {name: "Cookies", quantity: 16}
        ];
        var boughtItems = [];
        
        service.getToBuyItems = function () {
            return toBuyList;
        }

        service.bought = function (item) {
            var idxToRemove = toBuyList.indexOf(item);
            boughtItems.push(item);
            toBuyList.splice(idxToRemove,1)
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }

    }
})();