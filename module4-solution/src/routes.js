(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]; 
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    console.log("RoutesConfig configure");
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',
      {url: '/', templateUrl: 'src/templates/categoriesComponent.template.html'} 
      );
    console.log("RoutesConfig $stateProvider: ", $stateProvider);
    console.log("RoutesConfig $urlRouterProvider: ", $urlRouterProvider);
  }
})();