import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const content = this.modelFor('classroom.run.attempt.content')
    const {runAttemptId} = this.paramsFor('classroom.run')

    return this.store.query('code-submission', {
      filter: {
        codeChallengeId: content.get('codeChallenge.id'),
        runAttemptId
      }
    })
  },
  setupController (controller, model) {
    console.log(model)
    controller.set('codeSubmissions', model)
  }


});
