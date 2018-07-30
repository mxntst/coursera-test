(function () {
    angular.module("ShoppingCheckBoughtCart", [])
    .controller("CheckList", CheckList);

    function CheckList () {
        checkListCtrl = this;
        checkListCtrl.checkList = [
            {name: "Bread", quantity: 1},
            {name: "Milk", quantity: 2},
            {name: "Apple", quantity: 4},
            {name: "Orange", quantity: 8},
            {name: "Cookies", quantity: 16}
        ]
    }

})();