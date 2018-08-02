(function () {
  
  angular.module("MenuApp")
  .component("items", {
    templateUrl: 'templates/itemsComponent.template.html',
    bindings: {
      items: "<"
    }});
  })();