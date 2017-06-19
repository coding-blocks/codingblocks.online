/**
 * Created by abhishek on 19/06/17.
 */
'use strict';

import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import env from '../config/environment';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (data.auth_token) {
        resolve(data);
      } else {
        console.log("Old logging system detected. Logging out.");
        reject();
      }
    });
  },
  invalidate(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      resolve();
    });
  }
});
