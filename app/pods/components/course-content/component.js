import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggling(index) {
      var $ = Ember.$;
      var icon = $('#plus'+index);
      icon.toggleClass("fa-minus fa-plus");
    }
  }
});
