/**
 * Created by abhishek on 24/06/17.
 */
'use strict';

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  contents: DS.hasMany('content')
});
