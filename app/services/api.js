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
  headers: Ember.computed('session.data.authenticated.auth_token', {
    get() {
      let headers = {};
      const authToken = this.get('session.data.authenticated.auth_token');
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      return headers;
    }
  })
});
