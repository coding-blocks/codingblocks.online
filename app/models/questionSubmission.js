/**
 * Created by abhishek on 29/06/17.
 */
'use strict';

import DS from 'ember-data';

export default {
  name: DS.attr(),
  question: DS.belongsTo('question'),
  selectedChoices: DS.hasMany('choice')
}
