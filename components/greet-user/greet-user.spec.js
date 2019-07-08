describe("greetUser", function() {

    beforeEach(module("mainApp"));

    describe("GreetUserController", function() {
        var ctrl;

        beforeEach(inject(function($componentController){
            ctrl = $componentController("greetUser");
        }));

        it("should have a userName", function(){
            expect(ctrl.userName).not.toBe('');
        });
    });
});