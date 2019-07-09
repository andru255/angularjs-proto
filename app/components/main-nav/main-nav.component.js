app.
component('mainNav', {
    templateUrl: 'app/components/main-nav/main-nav.template.html',
    controller: ['$scope', '$location',
        function MainNavController($scope, $location) {
            this.go_to_finder = function() {
                $location.path('/finder');
            }
            this.go_to_dashboard = function() {
                $location.path('/dashboard');
            }
        }
    ]
});
