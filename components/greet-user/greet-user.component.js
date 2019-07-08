app.
component('greetUser', {
    template: 'Welcome!, {{ $ctrl.userName }}',
    controller: function GreetUserController() {
        this.userName = 'foo bar';
    }
});
