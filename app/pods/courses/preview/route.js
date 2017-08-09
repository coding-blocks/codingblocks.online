import Ember from 'ember';

export default Ember.Route.extend({
  'current-user': Ember.inject.service(),
  model(params) {
    return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('user', this.get('current-user').get('user'));
  }
});
