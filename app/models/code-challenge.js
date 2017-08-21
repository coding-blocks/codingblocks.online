/**
 * Created by abhishek on 20/07/17.
 */
'use strict';

import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  modelName: Ember.computed.alias('constructor.modelName'),
  name: DS.attr(),
  description: DS.attr(),
  parentContent: DS.belongsTo('content')
})
