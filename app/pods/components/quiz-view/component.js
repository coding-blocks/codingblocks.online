import Ember from 'ember';

export default Ember.Component.extend({
  question: Ember.computed('questionParam', function () {
    if( Ember.isNone(this.get('questionParam')) ) {
      console.log(this)
      return this.get('content.questions').objectAt(0)
    } else {
      return this.get('content.questions').findBy('id', this.get('questionParam'))
    }
  })
});
