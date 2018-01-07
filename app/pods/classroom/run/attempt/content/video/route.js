import Ember from 'ember';
import {task} from 'ember-concurrency';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model (params) {
    return this.store.findRecord('video', params.videoId)
  },
  setupController (controller, model) {
    controller.set('video', model)
  }
});
