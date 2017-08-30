/**
 * Created by umair on 8/30/17.
 */

import Ember from 'ember';

export function startsWith(params) {
  return params.reduce((a, b) => {
    return a.startsWith(b);
  });
}

export default Ember.Helper.helper(startsWith);
