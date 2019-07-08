describe("AppProductListController", function() {
    beforeEach(module("mainApp"));

    it("should have a siteName", inject(function($controller){
        var $scope = {};
        var ctrl = $controller("AppProductListController", {$scope: $scope});
        expect($scope.siteName).not.toEqual("");
    }));

});