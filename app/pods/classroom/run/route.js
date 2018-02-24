import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  notify: Ember.inject.service(),
  beforeModel (transition) {
    this.get('currentUser').getUser().then(user => {
      if(!user.getProperties('verifiedemail').verifiedemail){
        transition.abort()
        return this.transitionTo('help', 'EMAIL_NOT_VERIFIED')
      }
    });
  },
  model (params) {
    return this.store.findRecord('run-attempt', params.runAttemptId, {reload: true}).then(runAttempt => {
      return runAttempt.get('run')
    })
  }
});
