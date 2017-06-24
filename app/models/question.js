import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  seq: DS.attr(),
  type: DS.attr(),
  seq: DS.attr(),
  answer: DS.attr(),
  myAnswer: DS.attr(),
  status: DS.attr(),
  choices: DS.hasMany('question-choice')
});
