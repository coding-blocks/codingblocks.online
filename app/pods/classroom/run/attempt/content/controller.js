import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null // queryParam to set the question to display
});
