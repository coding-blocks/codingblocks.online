import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('lecture', params.lectureId)
  },
  setupController(controller, model) {
    controller.set('lecture', model)
  }
});
