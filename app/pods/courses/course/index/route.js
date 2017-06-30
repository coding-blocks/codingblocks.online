/**
 * Created by abhishek on 27/06/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('courses.course')
  },
  setupController (controller, model) {
    window.mod = model
    controller.set("courseRuns", model.get('runs'))
    controller.set("course", model)
  }
});
