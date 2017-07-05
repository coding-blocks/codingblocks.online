import Ember from 'ember';

export default Ember.Component.extend({
  question: null,
  nextQuestion: Ember.computed('questionParam','content.question', function () {

  }),
  didUpdateAttrs () {
    this._super(...arguments)
    const q = this.get('questionParam') // the queryParam
    if( Ember.isNone(q) ) {
      this.set('question', this.get('content.questions').objectAt(0))
      this.set('nextQuestion', 2)
    } else {
      this.set('question', this.get('content.questions').objectAt(q-1) )
      this.set('nextQuestion', parseInt( this.get('content.questions.length') ) >= (q+1) ? q+1 : q)
    }
  }
});
