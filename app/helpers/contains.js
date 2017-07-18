/**
 * Created by abhishek on 18/07/17.
 */
'use strict';

import Ember from 'ember';

export function contains(param) {
  // param[0] an array
  // param[1] an element of the array
  return param[0].contains(param[1])
}

export default Ember.Helper.helper(contains);

