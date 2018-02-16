/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  contentsArray: [],
  model () {
    const run = this.modelFor('classroom.run');
    const course = run.get('course');
    const runAttemptId = this.paramsFor('classroom.run').runAttemptId;

    const modelPromise = Ember.RSVP.hash({
      course,
      sections: this.store.query('section', {courseId: course.get('id'), runId: run.id, runAttemptId}),
      run,
      runAttempt: this.store.findRecord('runAttempt', runAttemptId)
    })
    
    modelPromise.then ( ({sections}) => {
      const contentsArray = sections.reduce( (acc, section) => {
        return [...acc , ...section.get('contents').map( content => content.get('id'))]
      }, [])
      this.set('contentsArray', contentsArray)
    })

    return modelPromise
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
  },
  actions: {
    transitionToNextContent () {
      const { contentId } = this.paramsFor('classroom.run.attempt.content')
      const contentsArray = this.get('contentsArray')
      const indexOfCurrentContent = contentsArray.indexOf(contentId)
      const nextContentId = contentsArray[indexOfCurrentContent+1]
      this.transitionTo ('classroom.run.attempt.content', nextContentId)
    }
  }
});
