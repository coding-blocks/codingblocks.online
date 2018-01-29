/**
 * Created by abhishek on 18/07/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr(),
  content: DS.belongsTo('content'),
  runAttempt: DS.belongsTo('runAttempt')
})
