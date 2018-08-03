(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]; 
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    console.log("RoutesConfig configure");
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'} 
      )
      .state('categories', {
        url: '/categories', 
        controller: "CategoriesController as categories",
        templateUrl: 'src/templates/categoriesComponent.template.html'}
      )
      .state('items', {
        url: '/categories/:catId/items', 
        templateUrl: 'src/templates/itemsComponent.template.html'}
      )
    }
})();