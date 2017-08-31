/**
 * Created by umair on 8/24/17.
 */

import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('document', params.documentId)
  },
  afterModel () {
    // make this content attempted
    return this.get('api').request('/progresses',{
      method: 'POST',
      data: {
        contentId: this.paramsFor('classroom.run.attempt.content').contentId,
        runAttemptId: this.paramsFor('classroom.run').runAttemptId,
        status: 'ATTEMPTED'
      }
    })
  }
});
