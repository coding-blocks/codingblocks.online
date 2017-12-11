import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggling() {
      var $ = Ember.$;
      var icon = $('#plus');
      icon.toggleClass("fa-minus fa-plus");
    }
  }
});
