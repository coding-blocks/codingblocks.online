import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  selctedChoice: DS.belongsTo('choice', {inverse: null}), // READ: https://guides.emberjs.com/v2.13.0/models/relationships/#toc_explicit-inverses
  choices: DS.hasMany('choice'),
  quiz: DS.belongsTo('quiz')
});
