/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  model () {
    const run = this.modelFor('classroom.run');
    const course = run.get('course');
    const runAttemptId = this.paramsFor('classroom.run').runAttemptId;

    console.log('TAG: ', runAttemptId)
    return Ember.RSVP.hash({
      course,
      sections: this.store.query('section', {courseId: course.get('id'), runId: run.id}),
      run,
      runAttempt: this.store.findRecord('runAttempt', runAttemptId)
    })
  },
  setupController(controller, model) {
    controller.set('course', model.course);
    controller.set('sections', model.sections);
    controller.set('run', model.run);
    controller.set('runAttempt', model.runAttempt);
    this.get('currentUser').getUser().then(user => {
      console.log(user);
      controller.set('user', user);
    });
  }
});
