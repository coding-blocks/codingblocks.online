/**
 * Created by abhishek on 28/06/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('content', params.contentId)
  },
  afterModel (model, transition) {
    if (model.get('contentable') === 'quiz')
      // return a promise to block rendering of template
      return model.get('payload').then(quiz => {
        this.transitionTo('classroom.run.attempt.content.quiz', quiz)
      })

  }
});
