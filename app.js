var products = angular.module('productApp', []);

products.controller('ProductListController', function ProductListController($scope) {
    $scope.items = [
        {name: 'apple', description:'juicy and healthy'},
        {name: 'orange', description:'citric and sweety fruit'}
    ];
});