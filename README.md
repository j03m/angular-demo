angular-demo
============

Angular demo takes the very basic angular tutorial app and jams it into a bit of yeoman scaffolding and integrates coverage via Karma and Protractor for end to end testing.

The goal being that you can just clone, npm install, bower install and then add code to scripts, views and tests but have everything else you need to get building with angular.

The code comes from the walk through at: http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app which is really great for just starting out.

To use all the capabilities here:

git clone https://github.com/j03m/angular-demo.git
npm install
bower install
./node_modules/protractor/bin/webdriver-manager update
./node_modules/protractor/bin/webdriver-manager start

Then

grunt serve

Once you've grunted, you can modify your code and jshint, your unit tests (/tests/spec/*) and integrations tests (/tests/e2e) will be executed. 


Notes: 

Most of this was generated by yeoman - which you should think about using.
I'm fairly certain this only sort of, kinda works on windows and certainly has additional (but surmountable) complexity if you're behind a corporate firewall. I haven't spent time trying to make it work there. 


capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },
  
  
  
  // An example configuration file.
  exports.config = {
    // Do not start a Selenium Standalone sever - only run this using chrome.
    //chromeOnly: true,
    //chromeDriver: './node_modules/protractor/selenium/chromedriver',
  
    // Capabilities to be passed to the webdriver instance.
    //capabilities: {
    //  'browserName': 'chrome'
    //},
  
  capabilities: {
      browserName: 'chrome',
      version: '',
      platform: 'ANY'
    },

  
    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['test/e2e/*.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
    }
  };
