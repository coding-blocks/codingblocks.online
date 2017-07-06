import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null, // queryParam to set the question to display
  question: Ember.computed('q', function () {
    const questions = this.get('model.questions'),
      q = this.get('q')
      return this.get('model.questions').objectAt(q-1)
  }),
  nextQuestion: Ember.computed('q', function () {
    const q = parseInt(this.get('q'))
    return (q+1) <= this.get('model.questions.length') ? (q+1) : null ;
  }),
  prevQuestion: Ember.computed('q', function () {
    const q = parseInt(this.get('q'))
    return (q-1) >= 1 ? q-1 : null
  })
});
