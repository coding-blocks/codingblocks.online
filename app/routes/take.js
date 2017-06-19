import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    "use strict";
    return this.store.findRecord('course',params.id)
  },
  setupController(controller,model){
    controller.set('course',model);
    controller.set('topContent',model.get('contents').toArray()[0])
  }
});
