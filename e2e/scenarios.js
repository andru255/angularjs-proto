'use strict';

describe('MyMarket App', function(){

    it('should redirect `index.html` to `index.html', function() {
        browser.get('index.html');
        expect(browser.getCurrentUrl()).toContain('index.html');
    });

});