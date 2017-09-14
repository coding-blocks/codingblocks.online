import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectChoice (choice, index) {
      this.get('question').set('selectedChoice', choice);
      Ember.$('#answer'+index).prop("checked", true)
    }
  }

});
