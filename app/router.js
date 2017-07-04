import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('course', {path: 'c/:id'}, function () {
      this.route('run' , {path: 'run/:id'}, function () {
        this.route('attempt')
        this.route('error');
      })
    });
  });

  this.route('classroom', function() {
    this.route('course', {path: 'c/:id'}, function () {
      this.route('run', {path: 'run/:id'}, function () {
        this.route('attempt')
        this.route('error');
      })
    });
  });
});

export default Router;
