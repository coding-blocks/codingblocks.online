/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  beforeModel () {
    // get a run attempt if exists for this run and user
    const run = this.modelFor('courses.course.run')
    const user = this.get('currentUser').load()
    window.sameRun  = user.courseRuns.findBy('id',run.id)
  },
  model () {
    const course =  this.modelFor('courses.course')
    return this.store.findRecord('course', course.id)
  },
  setupController(controller,model){
    controller.set('course',model);
    controller.set('topContent',model.get('contents').toArray()[0])
  }
});

