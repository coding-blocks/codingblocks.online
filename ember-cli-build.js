/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'esw-cache-fallback': {
      patterns: [
        'http://localhost:3000/api/(.+)',
        'https://api-online.cb.lk/api/(.+)'
      ]
    }
  });

  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/docs.css');

  app.import('vendor/js/jquery-slim.min.js');
  app.import('vendor/js/tether.min.js');
  app.import('vendor/js/bootstrap.min.js');

  var extraAssets = new Funnel('bower_components/ace-builds/src-min-noconflict', {
    srcDir: '/',
    include: ['ace.js', 'ext-language_tools.js', 'snippets/c_cpp.js', 'snippets/java.js',
      'snippets/python.js', 'snippets/text.js','snippets/javascript.js', 'worker-javascript.js', 'theme-monokai.js',
      'mode-c_cpp.js', 'mode-java.js', 'mode-python.js','mode-javascript.js'],
    destDir: '/assets/ace'
  });

  return app.toTree(extraAssets);
};
