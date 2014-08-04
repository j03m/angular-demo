describe('when navigating to the drivers page', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000/')
        ptor = protractor.getInstance();
    });

    it('should have N drivers', function() {
        // test goes here
        //hey I want to break point pls
        //browser.debugger();
        var elems = element.all(by.repeater('driver in driversList'));
        expect(elems.count()).toBe(23);

    });

});