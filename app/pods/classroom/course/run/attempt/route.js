/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  model () {
    return this.modelFor('classroom.course')
  },
  setupController(controller,model){
    controller.set('course',model);
    controller.set('topContent',model.get('sections').objectAt(0).get('contents').objectAt(0) )
  }
});

