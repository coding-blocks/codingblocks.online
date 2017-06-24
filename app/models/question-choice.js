import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  explanation: DS.attr(),
  seq: DS.attr()
});
