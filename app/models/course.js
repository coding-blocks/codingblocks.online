import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  subtitle: DS.attr(),
  summary: DS.attr(),
  fees: DS.attr(),
  popularity: DS.attr(),
  hoursPerDay: DS.attr(),
  isFree: DS.attr(),
  duration: DS.attr(),
  lecturesCount: DS.attr(),
  ratingCount: DS.attr(),
  videosDuration: DS.attr(),
  type: DS.attr(),
  video: DS.belongsTo('attachment'),
  image: DS.belongsTo('attachment'),
  language: DS.belongsTo('language'),
  level: DS.belongsTo('level'),
  contents: DS.hasMany('content'),
  sections: DS.hasMany('section')
})
