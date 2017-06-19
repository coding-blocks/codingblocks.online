/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/css/semantic.min.css');
  app.import('vendor/css/docs.css');


  app.import('vendor/js/jquery.min.js');
  app.import('vendor/js/semantic.min.js');


  return app.toTree();
};
