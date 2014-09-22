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

    it('should have the drivers we expect', function() {
        // test goes here
        //hey I want to break point pls
        //browser.debugger();
        var elems = element.all(by.repeater('driver in driversList'));
        expect(elems.get(0).getText()).toEqual("1 Sebastian Vettel Red Bull 397");
        expect(elems.get(1).getText()).toEqual("2 Fernando Alonso Ferrari 242");
        expect(elems.get(2).getText()).toEqual("3 Mark Webber Red Bull 199");
        expect(elems.get(3).getText()).toEqual("4 Lewis Hamilton Mercedes 189");

    });

    it('should respond to search correctly', function(){
        //add seb to search box
        element(by.model('nameFilter')).sendKeys("seb");

        //verify results
        var elems = element.all(by.repeater('driver in driversList'));
        expect(elems.count()).toBe(1);
        expect(elems.get(0).getText()).toEqual("1 Sebastian Vettel Red Bull 397");

        //add something else to search box
        element(by.model('nameFilter')).clear();
        element(by.model('nameFilter')).sendKeys("nico");
        elems = element.all(by.repeater('driver in driversList'));

        //verify result
        expect(elems.count()).toBe(2);
        expect(elems.get(0).getText()).toEqual("1 Nico Rosberg Mercedes 171");
        expect(elems.get(1).getText()).toEqual("2 Nico Hülkenberg Sauber 51");

        //clear the search box, make sure we have our full list again
        element(by.model('nameFilter')).clear();
        elems = element.all(by.repeater('driver in driversList'));
        expect(elems.count()).toBe(23);

        //and something that won't be found to the search box
        element(by.model('nameFilter')).sendKeys("joeiscool");
        elems = element.all(by.repeater('driver in driversList'));
        expect(elems.count()).toBe(0);



    });

    it('should handle search invalid characters', function(){
        //add seb to search box
        //verify results

        //add something else to search box
        //verify result


    });

    it('should have the correct details for driver click throughs', function(){

    });


    it('should return the main page when we click back', function(){

    });

    it('should return the main page when we click back', function(){

    });

});