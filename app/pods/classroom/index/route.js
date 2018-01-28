/**
 * Created by abhishek on 27/06/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
    currentUser: Ember.inject.service(),
    model () {
        return this.store.query('run', {
            enrolled: true // qp for getting only runs which i'm enrolled In
        })
    }
    // setupController (controller, model) {
      /*
        const userEnrollled = model.get('runs').objectAt(0).get('users').findBy('id', this.get('currentUser.user').id );
        controller.set('isEnrolled', !Ember.isNone(userEnrollled));
        controller.set("courseRuns", model.get('runs'));
        controller.set("course", model)*/
    // }
});
