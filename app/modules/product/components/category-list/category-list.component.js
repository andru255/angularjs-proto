productModule
.component('categoryList', {
    // the URL is relative to our index.html file
    templateUrl: productModulePath.components + 'category-list/category-list.template.html',
    controller: ['$http', 
        function CategoryListController($http) {
        var self = this;
        self.items = [];
        $http.get(productModulePath.base + 'data/categories.json?v=1').then(function(response){
            self.items = response.data.result;
        });
    }]
});
