/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const course =  this.modelFor('courses.course')
    return this.store.findRecord('course', course.id)
  },
  setupController(controller,model){
    controller.set('course',model);
    controller.set('topContent',model.get('contents').toArray()[0])
  }
});

