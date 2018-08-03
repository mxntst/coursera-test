(function () {
    angular.module("data")
    .service("MenuDataService", MenuDataService)
    .constant("Config", {
        categoriesUrl: "https://davids-restaurant.herokuapp.com/categories.json",
        menuItemsUrl: " https://davids-restaurant.herokuapp.com/menu_items.json"     
    });

    MenuDataService.$inject = ["$http", "Config"];
    
    function MenuDataService ($http, Config)  {
       var service = this;
       console.log("MenuDataService", this);
       service.getAllCategories  = function () {
           return $http({url: Config.categoriesUrl})
            .then(function (response) {return response.data;}); 
       }
       
       service.getItemsForCategory = function(categoryShortName) {
        return $http({
            url: Config.menuItemsUrl,
            params: {category: categoryShortName}
        })
        .then(function (response) {return response.data;}); 
       }
    }
})();