angular
.module('productApp')
.component('productList', {
    // the URL is relative to our index.html file
    templateUrl: 'components/product-list/product-list.template.html',
    controller: function ProductListController() {
        this.items = [
            {name: 'apple', description:'juicy and healthy'},
            {name: 'orange', description:'citric and sweety fruit'}
        ];
    }
});
