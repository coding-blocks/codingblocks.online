/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/docs.css');

  app.import('vendor/js/jquery-slim.min.js');
  app.import('vendor/js/tether.min.js');
  app.import('vendor/js/bootstrap.min.js');

  return app.toTree();
};
