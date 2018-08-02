(function () {
  
  angular.module("MenuApp")
  .component("categories", {
    templateUrl: 'templates/categoriesComponent.template.html',
    bindings: {
      item: "<"
    }});
  })();