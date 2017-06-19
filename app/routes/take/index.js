import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.modelFor('take')
  },
  setupController(controller,model){
    controller.set('topContent',model.get('contents').toArray()[0])
  }
});
