import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  choices: DS.hasMany('choice'),
  quiz: DS.belongsTo('quiz')
});
