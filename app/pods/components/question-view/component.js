import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectChoice (choice) {
      this.get('question').set('selectedChoice', choice)
    }
  }

});
