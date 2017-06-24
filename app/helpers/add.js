/**
 * Created by abhishek on 16/06/17.
 */
'use strict';

import Ember from 'ember';

export function add(param) {
  return parseInt(param[0]) + parseInt(param[1])
}

export default Ember.Helper.helper(add);

