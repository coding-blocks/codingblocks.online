import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('run-attempt', params.runAttemptId, {reload: true}).then(runAttempt => {
      return runAttempt.get('run')
    })
  }
});
