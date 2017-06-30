/**
 * Created by abhishek on 29/06/17.
 */
'use strict';

import DS from 'ember-data';

export default {
  quiz: DS.belongsTo('quiz'),
  run: DS.belongsTo('run'),
  questionSubmissions: DS.hasMany('questionSubmission')
}
