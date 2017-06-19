import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  contents: DS.hasMany('content')
});
