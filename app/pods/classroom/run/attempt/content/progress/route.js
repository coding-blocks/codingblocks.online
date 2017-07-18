import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const content = this.modelFor('classroom.run.attempt.content')
    if ( content.get('contentable') === 'quiz' ) {
      this.transitionTo('classroom.run.attempt.content.progress.quiz')
    }
    return content
  }
});
