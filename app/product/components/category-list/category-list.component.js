productModule
.component('categoryList', {
    // the URL is relative to our index.html file
    templateUrl: 'app/product/components/category-list/category-list.template.html',
    controller: ['$http', 
        function CategoryListController($http) {
        var self = this;
        self.items = [];
        $http.get('app/product/data/categories.json?v=1').then(function(response){
            self.items = response.data.result;
        });
    }]
});
