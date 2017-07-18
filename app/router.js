import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('preview', {path: 'preview/:courseId'});
  });

  this.route('classroom', function() {
    this.route('run', {path: 'run/:runAttemptId'}, function () {
      this.route('attempt', function () {
        this.route('content', {path: 'content/:contentId'}, function () {
          this.route('quiz', {path: 'quiz/:quizId'});
        })
        this.route('progress', {path: 'progress/:contentId'});
      });
    })
      this.route('error');
  });
});

export default Router;
