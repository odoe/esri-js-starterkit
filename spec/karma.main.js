var allTestFiles = [];
// var TEST_REGEXP = /test.*\.js$/;
var TEST_REGEXP = /.*Spec\.js$/;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(file);
  }
});

var dojoConfig = {
  packages: [
    {
    name:"spec",
    location:"/base/spec"
  }, {
    name:"weighted-overlay-modeler",
    location:"/base/dist"
  }, {
    name: 'esri',
    location: 'http://js.arcgis.com/3.9/js/esri'
  }, {
    name: 'dojo',
    location: 'http://js.arcgis.com/3.9/js/dojo/dojo'
  }, {
    name: 'dojox',
    location: 'http://js.arcgis.com/3.9/js/dojo/dojox'
  }, {
    name: 'dijit',
    location: 'http://js.arcgis.com/3.9/js/dojo/dijit'
  }, {
    name: 'controllers',
    location: '/base/app/js/controllers'
  }, {
    name: 'utils',
    location: '/base/app/js/utils'
  }, {
    name: 'sgt',
    location: '/base/app/js/sgt'
  }, {
    name: 'bootstrap',
    location: '/base/app/vendor/Dojo-Bootstrap'
  }, {
    name: 'widgets',
    location: '/base/app/js/widgets'
  }
  ],
  async: true
};


/**
 * This function must be defined and is called back by the dojo adapter
 * @returns {string} a list of dojo spec/test modules to register with your testing framework
 */
window.__karma__.dojoStart = function(){
  return allTestFiles;
};

