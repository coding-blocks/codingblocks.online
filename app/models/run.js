/**
 * Created by abhishek on 29/06/17.
 */
'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  enrollmentStart: DS.attr (),
  enrollmentEnd: DS.attr (),
  isFree: DS.attr(),
  price: DS.attr(),
  runAttemptId: DS.attr(),
  course: DS.belongsTo('course'),
  user: DS.belongsTo('user'),
  percentComplete: DS.attr(),
  isEnded: Ember.computed ('end', function () {
    const now = Math.floor (((new Date ()).getTime ()) / 1000),
      endTime = this.get ('end')
    ;

    return (now >= endTime)
  })
})
