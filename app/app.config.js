app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");

        angular.forEach(app.routes, function(value, key) {
            $routeProvider.when(key, value);
        })

        //404 page
        $routeProvider.otherwise({
            templateUrl: "/app/templates/404.template.html",
            controller: ['$rootScope', function ($rootScope) {
                $rootScope.pageinfo = {title: "Not Found", crumbs: "<i class='fa fa-home'></i> Dashboard,/dashboard"};
            }],
        });
    }
]);