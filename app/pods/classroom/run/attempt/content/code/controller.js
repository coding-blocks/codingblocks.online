import Ember from 'ember';
import {task, timeout} from 'ember-concurrency';

export default Ember.Controller.extend({
  api: Ember.inject.service(),
  submitCodeTask: task(function * ({code, lang}) {
    const api = this.get('api'),
      codeChallengeId = this.get('codeChallenge.id'),
      runAttemptId = this.get('runAttemptId')

    const res = yield api.request(`/code_challenges/${codeChallengeId}/submit`, {
      method: 'POST',
      data: {code, lang, runAttemptId},
      json: true
    })

    console.log(res)
    })
});
