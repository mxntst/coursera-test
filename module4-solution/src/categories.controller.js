(function () {
  
  angular.module("MenuApp")
  .controller("CategoriesController", CategoriesController);
  
  function CategoriesController (MenuDataService) {
    var ctrl = this;

    ctrl.items = [];
    MenuDataService.getAllCategories()
    .then(function(data) {
      console.log("CategoriesController data", data);
      ctrl.items = data;
    })
  }
  })();