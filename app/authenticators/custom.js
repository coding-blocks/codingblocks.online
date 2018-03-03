/**
 * Created by abhishek on 19/06/17.
 */
'use strict';

import Ember from 'ember';
import jwtDecode from 'ember-cli-jwt-decode';
import Base from 'ember-simple-auth/authenticators/base';
import { task, timeout } from 'ember-concurrency';
import env from '../config/environment';

export default Base.extend({
  api: Ember.inject.service('api'),
  refreshToken: null,
  jwt : null,
  restore(data) {
      return new Ember.RSVP.Promise( (resolve, reject) => {
          if (!Ember.isNone(data.jwt) && !Ember.isNone(data.refresh_token)) {
            this.refreshToken = data.refresh_token
            this._scheduleRefreshTokenRequest(data.jwt)
            resolve(data);
          } else {
              console.log("Old logging system detected. Logging out.");
              reject();
          }
      });
  },
  authenticate() {
    var args = [...arguments];
    return new Ember.RSVP.Promise( (resolve, reject) => {
        Ember.$.get(env.apiEndpoint + '/api/jwt/login?grant_code=' + args[0],  (data) => {
            if (!Ember.isNone(data.jwt) && !Ember.isNone(data.refresh_token) ) {
                this.refreshToken = data.refresh_token
                this._scheduleRefreshTokenRequest(data.jwt)
                resolve(data);
            } else {
                reject(data);
            }
        });
    });
  },
  // Schedules a refresh token request after @time ms
  _scheduleRefreshTokenRequest (rawJwt) {
    this.jwt = jwtDecode(rawJwt)
    let time = this.jwt.exp - (+new Date()/1000.0) - 50;
    time = time < 0 ? 0 : time
    console.log(time)
    Ember.run.later(this, this.refreshTokenRequest, time*1000)
  },
  refreshTokenRequestTask: task(function * () {
    timeout(5000)
    const sendRequestPromise = new Promise( (resolve, reject) => {
      this.get('api').request(env.apiEndpoint + '/api/jwt/refresh?refresh_token=' + this.refreshToken , (data) => {
        if (!Ember.isNone(data.jwt)) {
          resolve(data)
        } else {
          reject()
        }
      })
    })

    yield sendRequestPromise.then( data => {
      this._scheduleRefreshTokenRequest(data.jwt)
      this.trigger('sessionDataUpdated', {
            jwt: data.jwt,
            refresh_token: this.refreshToken
      })
    }).catch(err => {
      this.trigger('sessionDataInvalidated')
    })

  }).drop(),
  refreshTokenRequest () {
    if ( this.jwt.exp > (+new Date())/1000.0 + 50 && !Ember.isNone(this.jwt) && !Ember.isNone(this.refreshToken) ) {
        return ;
    }
    this.get('refreshTokenRequestTask').perform()
  },
  invalidate(data) {
    return this.get('api').request('/jwt/logout')
  }
});
