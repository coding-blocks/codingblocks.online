import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  contentable: DS.attr(),
  course: DS.belongsTo('course'),
  quiz: DS.belongsTo('quiz'),
  lecture: DS.belongsTo('lecture'),
  "code-challenge": DS.belongsTo('code-challenge'),
  attachment: DS.belongsTo('attachment'),
  payload: Ember.computed('contentable', 'quiz', 'lecture', 'code-challenge', function () {
    return this.get(this.get('contentable'))
  })
})
