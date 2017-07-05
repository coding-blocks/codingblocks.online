import Ember from 'ember';

export default Ember.Component.extend({
  question: null,
  didUpdateAttrs () {
    this._super(...arguments)
    if( Ember.isNone(this.get('questionParam')) ) {
      this.set('question', this.get('content.questions').objectAt(0))
    } else {
      this.set('question', this.get('content.questions').findBy('id', this.get('questionParam')) )
    }
  }
});
