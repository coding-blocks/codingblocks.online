import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  session: Ember.inject.service(),
  model(params) {
      return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
    },
  setupController(controller, model) {
    this._super(controller, model);
    if (this.get('session.isAuthenticated')) {
      //FIXME: .getUSer() doesn't work for some reason. Needs to be fixed. Calling load() creates an extra http request.
      this.get('currentUser').load().then(user => {
        controller.set('user', user);
      });
    }
  }
});
