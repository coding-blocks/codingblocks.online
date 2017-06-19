import DS from 'ember-data';

export default DS.Model.extend({
  fileName: DS.attr(),
  fileSize: DS.attr(),
  contentType: DS.attr(),
  path: DS.attr(),
  type: DS.attr(),
  duration: DS.attr(),
  subtype: DS.attr()
})
