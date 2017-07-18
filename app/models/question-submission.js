/**
 * Created by abhishek on 29/06/17.
 */
'use strict';
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  score: DS.attr(),
  selectedChoices: DS.attr(),
  question: DS.belongsTo('question'),
  isCorrect: Ember.computed('score', function () {
    return +this.get('score') > 0
  })
})
