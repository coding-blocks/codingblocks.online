import Ember from 'ember';

export default Ember.Route.extend({
  oneauthUser: Ember.inject.service(),
  notify: Ember.inject.service(),
  beforeModel (transition) {
    return this.get('oneauthUser').getUser().then(user => {
      if(!user.verifiedemail) {
        transition.abort()
        return this.transitionTo('help', 'EMAIL_NOT_VERIFIED')
      }
    })
  },
  model (params) {
    return this.store.findRecord('run-attempt', params.runAttemptId, {reload: true}).then(runAttempt => {
      return runAttempt.get('run')
    })
  }
});
