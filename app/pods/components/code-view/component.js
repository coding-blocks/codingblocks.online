import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    console.log(this);
  }
});
