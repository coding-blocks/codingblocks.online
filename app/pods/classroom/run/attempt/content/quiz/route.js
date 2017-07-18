import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const runAttemptId = this.paramsFor('classroom.run').runAttemptId
    const contentId = this.modelFor('classroom.run.attempt.content').get('id')
    return Ember.RSVP.hash({
      runId: this.modelFor('classroom.run').get('id'),
      contentId: contentId,
      quiz: this.store.findRecord('quiz',params.quizId),
      // getRunAttemptId from params of parent
      runAttemptId: runAttemptId,
      progress: this.store.queryRecord('progress', {
        filter: {contentId, runAttemptId}
      })
    })
  },
  setupController(controller, model) {
    controller.set('quiz', model.quiz)
    controller.set('runId', model.runId)
    controller.set('contentId', model.contentId)
    controller.set('runAttemptId', model.runAttemptId)
    controller.set('progress', model.progress)
  }
});
