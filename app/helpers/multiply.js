import Ember from 'ember';

export function multiply(params) {
  return params[0] * 1000;
}

export default Ember.Helper.helper(multiply);
