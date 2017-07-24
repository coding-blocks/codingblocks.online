import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  seq: DS.attr(),
  contentable: DS.attr(),
  course: DS.belongsTo('course'),
  quiz: DS.belongsTo('quiz'),
  lecture: DS.belongsTo('lecture'),
  codeChallenge: DS.belongsTo('codeChallenge'),
  attachment: DS.belongsTo('attachment'),
  componentName: Ember.computed('contentable', function () {
    switch (this.get('contentable')) {
      case 'quiz': return 'quiz-view';
      case 'lecture': return 'lecture-view';
      case 'code': return 'code-view';
    }
  }),
  payload: Ember.computed('contentable', 'quiz', 'lecture', function () {
    return this.get(this.get('contentable'))
  })
})
