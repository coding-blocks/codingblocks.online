import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Component.extend({
  redirectUrl: "http://localhost:3000/api/checkout", //default value for dev env
  init() {
    this._super();
    this.set('redirectUrl', ENV.apiEndpoint + '/api/checkout');
  }
});
