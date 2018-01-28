import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service('current-user'),
  user: Ember.computed.alias('currentUser.user'),
  api: Ember.inject.service(),
  actions: {
    transitionTo(route, param) {
      this.transitionToRoute(route, param);
    },
    login() {
      var redirectionPath = window.location.pathname;
      redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
      localStorage.setItem('redirection-path', redirectionPath);
      window.location = `https://account.codingblocks.com/oauth/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${config.publicUrl}`
    },
    enrollThisCourse(run) {
      this.get('api').request('/run_attempts', {
        method: 'POST',
        data: {
          'run-id': run.id
        },
        json: true
      }).then(data => {
        if (data.status === 'success') {
          this.get('transition')('classroom.run.index', data.id);
        }
      }).catch(err => {

      })
    }
  }
});
