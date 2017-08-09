/**
 * Created by umair on 8/9/17.
 */

import Ember from 'ember';

export function mul(params) {
  return params.reduce((a, b) => {
    return a * b;
  });
}

export default Ember.Helper.helper(mul);
