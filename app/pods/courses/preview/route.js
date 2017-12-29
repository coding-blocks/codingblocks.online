import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  session: Ember.inject.service(),
  model(params) {
      return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
    },
  setupController(controller, model) {
    this._super(controller, model);
        }
});
