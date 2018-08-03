(function () {
  
  angular.module("MenuApp")
  .controller("CategoriesController", CategoriesController);
  
  CategoriesController.$inject = ["$stateParams", "MenuDataService"];
  function CategoriesController ($stateParams, MenuDataService) {
    var ctrl = this;
    ctrl.items = [];
    MenuDataService.getItemsForCategory($stateParams.categoryShortName)
    .then(function(data) {
      console.log("CategoriesController data", data);
      ctrl.items = data;
    })
  }
  })();