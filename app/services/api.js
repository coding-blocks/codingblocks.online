/**
 * Created by abhishek on 30/06/17.
 */
'use strict';

import Ember from 'ember';
import env from '../config/environment'
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  host: env.apiEndpoint,
  contentType: 'application/json; charset=utf-8',
  namespace: '/api',
  headers: Ember.computed('session.data.authenticated.jwt', {
    get() {
      let headers = {};
      const jwt = this.get('session.data.authenticated.jwt');
      if (jwt) {
        headers['Authorization'] = `JWT ${jwt}`;
      }
      return headers;
    }
  })
});
