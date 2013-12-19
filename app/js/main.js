/*global require*/
require([
  'esri/config',
  'esri/request',
  'controllers/widgetcontroller',
  'domReady!'
], function (
  esriConfig,
  esriRequest,
  WidgetCtrl
) {
  'use strict';

  function onConfigSuccess(response) {
    var ctrl;
    delete response._ssl;
    if ('proxy' in response) {
      esriConfig.defaults.io.proxyUrl = response.proxy.url;
      esriConfig.defaults.io.alwaysUseProxy = response.proxy.alwaysUseProxy;
    }
    ctrl = new WidgetCtrl(response);
    ctrl.startup();
  }

  function onConfigError(error) {
    console.log('ERROR - Loading config file:', error);
  }

  function requestParams() {
    return {
      url: 'config.json',
      handleAs: 'json'
    };
  }

  // Read the config from a url
  esriRequest(requestParams()).then(onConfigSuccess, onConfigError);
});
