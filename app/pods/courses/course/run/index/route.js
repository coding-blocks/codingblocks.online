import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    const thisRun = this.store.findRecord('run', params.id)
    /*
    thisRun.then(run =>{
      "use strict";
      // user is enrolled
    }).catch(err=>{
      if(isFree) {
        enroll()
      } else {
        payYouMotherFucker()
      }
    })*/

  },
  model (params) {
    return this.modelFor('courses.course.run')
  },
  setupController (controller, model) {
    controller.set('run', model)
  }
});
