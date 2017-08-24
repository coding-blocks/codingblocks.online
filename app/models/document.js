/**
 * Created by umair on 8/24/17.
 */

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  markdown: DS.attr(),
  parentContent: DS.belongsTo('content')
});

