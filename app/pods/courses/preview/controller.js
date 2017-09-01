import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionTo(route, param) {
      this.transitionToRoute(route, param);
    }
  }
});
