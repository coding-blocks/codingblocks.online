import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const runAttemptId = this.paramsFor('classroom.run').runAttemptId,
      contentId = this.paramsFor('classroom.run.attempt.content').contentId

    return Ember.RSVP.hash({
      codeChallenge : this.store.findRecord('code-challenge', params.codeId),
      runAttemptId,
      contentId,
      progress: this.store.queryRecord('progress', {
        filter: {contentId, runAttemptId}
      })
    })
  },
  setupController(controller, model) {
    controller.set ('codeChallenge', model.codeChallenge)
    controller.set ('runAttemptId', model.runAttemptId)
    controller.set ('contentId', model.contentId)
    controller.set ('progress', model.progress)
  }
});
