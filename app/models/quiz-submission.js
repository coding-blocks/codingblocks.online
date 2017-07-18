/**
 * Created by abhishek on 29/06/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  quiz: DS.belongsTo('quiz'),
  questionSubmissions: DS.hasMany('question-submission')
})
