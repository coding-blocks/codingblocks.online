import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      runId: this.modelFor('classroom.run').get('id'),
      contentId: this.modelFor('classroom.run.attempt.content').get('id'),
      quiz: this.store.findRecord('quiz',params.quizId)
    })
  },
  setupController(controller, model) {
    controller.set('quiz', model.quiz)
    controller.set('runId', model.runId)
    controller.set('contentId', model.contentId)
  }
});
