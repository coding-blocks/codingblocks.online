import Ember from 'ember';
import {task} from 'ember-concurrency';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  markAttemptedTask: task(function * () {
    const progressPromise = this.get('api').request('/progresses',{
        method: 'POST',
        data: {
          contentId: this.paramsFor('classroom.run.attempt.content').contentId,
          runAttemptId: this.paramsFor('classroom.run').runAttemptId,
          status: 'ATTEMPTED'
        }
      })
    yield progressPromise
    console.log('Progress MARKED!')
  }),
  model (params) {
    return this.store.findRecord('video', params.videoId)
  },
  
  afterModel () {
    // make this content attempted
    const progressTimer = Ember.run.later(this, function () {
      this.get('markAttemptedTask').perform()
    },30000)
    this.set('progressTimer', progressTimer)
  },
  
  actions: {
    willTransition (transition) {
      Ember.run.cancel(this.get('progressTimer'))
      return true;
    }
  },

  setupController (controller, model) {
    controller.set('video', model)
  }
});
