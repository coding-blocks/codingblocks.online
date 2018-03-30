/**
 * Created by abhishek on 24/06/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr(),
  verifiedemail: DS.attr(),
  contents: DS.hasMany('content'),
  courseRuns: DS.hasMany('run'),
  runAttempt: DS.belongsTo('run-attempt'),
  photo: DS.attr(),
  oneauthId: DS.attr()
});
