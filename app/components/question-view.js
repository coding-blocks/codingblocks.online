import Ember from 'ember';

export default Ember.Component.extend({
  markedCorrect: Ember.computed('showResults', 'question.myAnswer', function () {
    return this.get('showResults') && ( this.get('question.answer') == this.get('question.myAnswer') )
  }),
  actions: {
    selectOption (choiceId) {
      if(this.get('showResults'))
        return ;
      this.get('question').set('myAnswer',choiceId)
    }
  }
});
