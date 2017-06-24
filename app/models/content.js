import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  contentType: DS.attr(),
  seq: DS.attr(),
  isQuestion: Ember.computed.equal('contentType', 'QUIZ'),
  questions: DS.hasMany('question'),
  course: DS.belongsTo('course'),
  attachment: DS.belongsTo('attachment')
})
