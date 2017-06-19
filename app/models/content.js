import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  type: DS.attr(),
  seq: DS.attr(),
  course: DS.belongsTo('course'),
  attachment: DS.belongsTo('attachment')
})
