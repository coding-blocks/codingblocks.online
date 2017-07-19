/**
 * Created by abhishek on 28/06/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  link: DS.attr(),
  parentContent: DS.belongsTo('content')
});
