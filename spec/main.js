/*global window, require, location*/
(function () {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/),
  locationPath = '';
  if (typeof location === 'object') {
    // running in browser
    locationPath = location.pathname.replace(pathRX, '') + '/';

    // running in unit tests
    locationPath = (locationPath === '/') ? '/' : locationPath;
  }

  require({
    aliases: [[
      'text', 'dojo/text',
      'domReady', 'dojo/domReady'
    ]],
    packages: [{
      name: 'spec',
      location: locationPath + 'spec'
    }, {
      name: 'controllers',
      location: locationPath + 'app/js/controllers'
    }, {
      name: 'utils',
      location: locationPath + 'app/js/utils'
    }, {
      name: 'widgets',
      location: locationPath + 'app/js/widgets'
    }, {
      name: 'workers',
      location: locationPath + 'app/js/workers'
    }]
  });

  /**
   * Method same as with requirejs
   * http://www.bennadel.com/blog/2393-Writing-My-First-Unit-Tests-With-Jasmine-And-RequireJS.htm
   **/
  require([
    'require',
    'dojo/ready'
  ], function (require, ready) {

    ready(function () {
      require([
        'widgets/map/mapSpec',
        'widgets/map/converterSpec',
        'widgets/map/layerutilSpec',
        'widgets/touch/touchwidgetSpec'
      ], function () {
        (window.mochaPhantomJS || window.mocha).run();
      });

    });

  });

}).call(this);
