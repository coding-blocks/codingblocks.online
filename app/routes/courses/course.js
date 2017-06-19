import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params.id)
    return this.store.findRecord('course',params.id)
  }
});
