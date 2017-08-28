import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  contentable: DS.attr(),
  course: DS.belongsTo('course'),
  quiz: DS.belongsTo('quiz'),
  lecture: DS.belongsTo('lecture'),
  "code-challenge": DS.belongsTo('code-challenge'),
  document: DS.belongsTo('document'),
  attachment: DS.belongsTo('attachment'),
  payload: Ember.computed('contentable', 'quiz', 'lecture', 'code-challenge', 'document', function () {
    return this.get(this.get('contentable'))
  }),
  progress: DS.belongsTo('progress')
})
