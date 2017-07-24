import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      codeChallenge : this.store.findRecord('code-challenge', params.codeId),
      runAttemptId: this.paramsFor('classroom.run').runAttemptId
    })
  },
  setupController(controller, model) {
    controller.set ('codeChallenge', model.codeChallenge)
    controller.set ('runAttemptId', model.runAttemptId)
  }
});
