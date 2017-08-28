/**
 * Created by umair on 8/22/17.
 */

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  photo: DS.attr(),
  description: DS.attr()
})
