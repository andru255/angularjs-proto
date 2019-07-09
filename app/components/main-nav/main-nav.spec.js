describe("mainNav", function() {

    beforeEach(module("mainApp"));

    describe("MainNavController", function() {
        var ctrl, location;

        beforeEach(inject(function($componentController){
            ctrl = $componentController("mainNav");
        }));

        it("should have go_to_finder", inject(function($location) {
            ctrl.go_to_finder();
            expect($location.path()).toEqual("/finder");
        }));

        it("should have go_to_dashboard", inject(function($location) {
            ctrl.go_to_dashboard();
            expect($location.path()).toEqual("/dashboard");
        }));
    });
});