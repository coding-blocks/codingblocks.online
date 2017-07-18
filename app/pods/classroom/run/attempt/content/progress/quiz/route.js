import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const content = this.modelFor('classroom.run.attempt.content')
    return this.store.queryRecord('quiz-submission',{
      filter: {
        quizId: content.get('quiz.id')
      }
    })
  },
  setupController(controller, model) {
    controller.set('quizSubmission', model)
  }
});
