/**
 * Created by abhishek on 04/09/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  url: DS.attr()
})
