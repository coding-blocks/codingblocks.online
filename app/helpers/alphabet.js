/**
 * Created by abhishek on 16/06/17.
 */
'use strict';

import Ember from 'ember';

export function alphabet(param) {
  return String.fromCharCode(65+parseInt(param[0]))
}


export default Ember.Helper.helper(alphabet);

