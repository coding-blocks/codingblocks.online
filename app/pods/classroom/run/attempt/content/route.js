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
      this.transitionTo('classroom.run.attempt.content.quiz', model.get('quiz.id'), { queryParams: {q: 1} } )
    else if (model.get ('contentable') === 'lecture')
      this.transitionTo('classroom.run.attempt.content.lecture', model.get('lecture.id'))
    else if (model.get ('contentable') === 'code-challenge')
      this.transitionTo('classroom.run.attempt.content.code', model.get('code-challenge.id'))
    else if (model.get ('contentable') === 'document')
      this.transitionTo('classroom.run.attempt.content.document', model.get('document.id'))
    else if (model.get ('contentable') === 'video')
      this.transitionTo('classroom.run.attempt.content.video', model.get('video.id'))
  },
  actions: {
    willTransition (transition) {
      //mark this as progress marked
      
      const { runAttempt } = this.modelFor("classroom.run.attempt")
      const content = this.modelFor('classroom.run.attempt.content')
      const progress = content.get('progress')
      if ( !progress.get("id")) {
        transition.abort () // stop this transition
        //create new progress
        this.store.createRecord ('progress', {
          status: 'DONE',
          content,
          runAttempt
        }).save().then ( p => {
          content.set('progress', p)
          transition.retry()
        })
      } else {
        // return if the status is already DONE
        if (progress.get("status") === 'DONE') {
          return true;
        }
        transition.abort () // stop this transition
        // update this progress
        progress.set("status", "DONE")
        progress.then(p => {
          p.save().then( () => transition.retry())
        })
      }
    
    }
  }
});
