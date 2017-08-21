import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  contentable: DS.attr(),
  course: DS.belongsTo('course'),
  quiz: DS.belongsTo('quiz'),
  lecture: DS.belongsTo('lecture'),
  "code-challenge": DS.belongsTo('code-challenge'),
  attachment: DS.belongsTo('attachment'),
  componentName: Ember.computed('contentable', function () {
    switch (this.get('contentable')) {
      case 'quiz': return 'quiz-view';
      case 'lecture': return 'lecture-view';
      case 'code-challenge': return 'code-view';
    }
  }),
  payload: Ember.computed('contentable', 'quiz', 'lecture', 'code-challenge', function () {
    return this.get(this.get('contentable'))
  })
})
