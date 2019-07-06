describe("ProductListController", function() {
    beforeEach(module("productApp"));

    it("should create a `products` model with 2 items", inject(function($controller){
        var $scope = {};
        var ctrl = $controller("ProductListController", {$scope: $scope});
        expect($scope.items.length).toBe(2);
    }));
});