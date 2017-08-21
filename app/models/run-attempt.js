/**
 * Created by abhishek on 29/06/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  run: DS.belongsTo('run'),
  user: DS.belongsTo('user')
})
