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

// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   currentUser: Ember.inject.service('current-user'),
//   session: Ember.inject.service(),
//   model(params) {
//     let user = this.get('currentUser.user');
//       return Ember.RSVP.hash({
//       course : this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}}),
//       run : this.store.query('run', {courseId : params.courseId}),
//       user:user,
//       runAttempt : this.get('store').query('run_attempt',{userId : user.id})
// })
//   // return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
//   },
//   setupController(controller, model) {
//     this._super(controller, model);
//       controller.set('course',model.course);
//     if (this.get('session.isAuthenticated')) {
//       //FIXME: .getUSer() doesn't work for some reason. Needs to be fixed. Calling load() creates an extra http request.
//         controller.set('user', model.user);
//         controller.set('run',model.run);
//         controller.set('runAttempt',model.runAttempt);
//     }
//   }
// });
