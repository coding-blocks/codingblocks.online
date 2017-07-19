import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log(params)
    return this.store.findRecord('lecture', params.lectureId)
  },
  setupController(controller, model) {
    controller.set('lecture', model)
  }
});
