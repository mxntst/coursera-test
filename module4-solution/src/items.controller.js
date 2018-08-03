(function () {
  
  angular.module("MenuApp")
  .controller("ItemsController", ItemsController  );
  
  ItemsController.$inject = ["$stateParams", "MenuDataService"];
  function ItemsController ($stateParams, MenuDataService) {
    var ctrl = this;
    ctrl.items = [];
    MenuDataService.getItemsForCategory($stateParams.categoryShortName)
    .then(function(data) {
      console.log("ItemsController data", data);
      ctrl.items = data.menu_items;
    })
  }
  })();