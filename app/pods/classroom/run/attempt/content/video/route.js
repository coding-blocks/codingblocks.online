import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('video', params.videoId)
  },
  setupController (controller, model) {
    controller.set('video', model)
  }
});
