describe("productList", function() {
    beforeEach(module("mainApp"));

    describe("ProductListController", function() {

        var ctrl;

        beforeEach(inject(function($componentController){
            ctrl = $componentController("productList");
        }));

        it("should create a `products` model with 2 items", (function(){
            expect(ctrl.items.length).toBe(2);
        }));
    });
});