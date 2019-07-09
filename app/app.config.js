app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");

        $routeProvider.
            when('/finder', {
                template: '<product-list></product-list>'
            }).
            when('/dashboard', {
                template: '<category-list></category-list>'
            });
    }
]);