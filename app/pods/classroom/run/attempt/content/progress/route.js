import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const content = this.modelFor('classroom.run.attempt.content')
    if ( content.get('contentable') === 'quiz' ) {
      this.transitionTo('classroom.run.attempt.content.progress.quiz')
    } else if (content.get('contentable') === 'code') {
      this.transitionTo('classroom.run.attempt.content.progress.code')
    }
    return content
  }
});
