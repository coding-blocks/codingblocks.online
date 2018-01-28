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
    this.route('run', {path: 'batch/:runAttemptId'}, function () {
      this.route('attempt', function () {
        this.route('content', {path: 'content/:contentId'}, function () {
          this.route('quiz', {path: 'quiz/:quizId'});
          this.route('progress', function() {
            this.route('quiz');
            this.route('code');
          });
          this.route('lecture', {path: 'lecture/:lectureId'});
          this.route('code', {path: 'code/:codeId'});
          this.route('document', {path: 'doc/:documentId'});
          this.route('video', {path: 'external-video/:videoId'});
        })

        this.route('progress', function() {});
      });

      this.route('progress', function() {});
    })
      this.route('error');
  });
  this.route('otp', function() {
    this.route('done');
  });

  this.route('opt', function() {});
  this.route('logout');
  this.route('error404', {path: '/*path'})
});

export default Router;
