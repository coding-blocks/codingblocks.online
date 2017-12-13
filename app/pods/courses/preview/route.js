import Ember from 'ember';

export default Ember.Route.extend({
  'current-user': Ember.inject.service(),
  session: Ember.inject.service(),
  model(params) {
    let currUser = this.get('current-user').load().then(user => {
      return user;
    });
    return Ember.RSVP.hash({
      course : this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}}),
      run : this.store.query('run', {courseId : params.courseId}),
      user : currUser,
      runAttempt : this.get('store').query('run_attempt',{userId : currUser.userId})
  })
  // return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
  },
  setupController(controller, model) {
    this._super(controller, model);
    if (this.get('session.isAuthenticated')) {
      //FIXME: .getUSer() doesn't work for some reason. Needs to be fixed. Calling load() creates an extra http request.
        controller.set('user', model.currUser);
    }
  }
});
