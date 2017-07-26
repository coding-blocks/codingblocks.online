/**
 * Created by abhishek on 26/07/17.
 */
'use strict';

import Ember from 'ember';

export function base64Decode(param) {
  console.log(param)
  return window.atob(param[0])
}


export default Ember.Helper.helper(base64Decode);

