import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('course', {path: 'c/:courseId'}, function () {
      this.route('run' , {path: 'run/:runId'}, function () {
        this.route('attempt')
        this.route('error');
      })
    });
  });

  this.route('classroom', function() {
    this.route('run', {path: 'run/:runId'}, function () {
      this.route('attempt', function () {
        this.route('content', {path: 'content/:contentId'})
      })
      this.route('error');
    });
  });
});

export default Router;
