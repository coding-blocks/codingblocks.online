/**
 * Created by abhishek on 28/06/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('content', params.contentId, {reload: true})
  },
  afterModel (model, transition) {
    if (model.get('contentable') === 'quiz')
      // return a promise to block rendering of template
        this.transitionTo('classroom.run.attempt.content.quiz', model.get('quiz.id'), { queryParams: {q: 1} } )
  }
});
