import Ember from 'ember';

export default Ember.Route.extend({
  'current-user': Ember.inject.service(),
  session: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      run : this.store.query('run', {}),
      course : this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}})
  })
  // return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
  },
  setupController(controller, model) {
    this._super(controller, model);
    if (this.get('session.isAuthenticated')) {
      //FIXME: .getUSer() doesn't work for some reason. Needs to be fixed. Calling load() creates an extra http request.
      this.get('current-user').load().then(user => {
        controller.set('user', user);
      });
    }
  }
});
