/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'vlyop-frontend',
    podModulePrefix: 'vlyop-frontend/pods',
    environment: environment,
    sentry: {
      dsn: "http://4fa93081cc2e43ed893dba58a19103ee@sentry.cb.lk/7",
      exposedPropertyName: "raven",
      globalErrorCatching: true
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    }, 

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiEndpoint = 'http://localhost:3000';
    ENV['simple-auth'] = {
      crossOriginWhitelist:[ '*' ]
    },
    ENV.publicUrl = 'http://localhost:4200';
    ENV.clientId = 7642172843
    ENV.refreshTokenTimeout = 20000 // 20 sec
    // ENV.sentry.development = true
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.publicUrl = 'https://codingblocks.online/';
    ENV.apiEndpoint = 'https://api-online.cb.lk';
    ENV.clientId = 5633768694
    ENV.refreshTokenTimeout = 900000 // 15min
  }

  return ENV;
};
