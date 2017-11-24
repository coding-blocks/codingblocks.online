/**
 * Created by abhishek on 19/06/17.
 */
'use strict';

import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import env from '../config/environment';

export default Base.extend({
  refreshTokenTimerId: null,
  refreshToken : null,
  restore(data) {
      return new Ember.RSVP.Promise( (resolve, reject) => {
          if (!Ember.isNone(data.jwt) && !Ember.isNone(data.refresh_token)) {
            this.scheduleRefreshTokenRequest(env.refreshTokenTimeout)
            this.refreshToken = data.refresh_token
            Ember.run.later(this, this.refreshTokenRequest, this.refreshToken, 0)
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
                  this.scheduleRefreshTokenRequest(env.refreshTokenTimeout)
                  this.refreshToken = data.refresh_token
                  resolve(data);
              } else {
                  reject(data);
              }
          });
      });
  },
  // Schedules a refresh token request after @time ms
  scheduleRefreshTokenRequest (wait) {
    if (!Ember.isNone(this.refreshTokenTimerId))
      Ember.run.cancel(this.refreshTokenTimerId)

    const id = Ember.run.later(this, this.refreshTokenRequest, this.refreshToken, wait)
    this.refreshTokenTimerId = id
  },
  refreshTokenRequest () {
    Ember.$.get(env.apiEndpoint + '/api/jwt/refresh?refresh_token=' + this.refreshToken , (data) => {
      if (!Ember.isNone(data.jwt)) {
        this.scheduleRefreshTokenRequest(env.refreshTokenTimeout)
        this.trigger('sessionDataUpdated', {
          jwt: data.jwt,
          refresh_token: this.refreshToken
        })
      } else {
        this.trigger('sessionDataInvalidated')
        window.location.href = "https://account.codingblocks.com/logout"
        //TODO: logout of oneauth
      }
    })
  },
  invalidate(data) {
      return new Ember.RSVP.Promise(function (resolve, reject) {
        window.setTimeout( () => {
          window.location.href = "https://account.codingblocks.com/logout?redirect=" + env.publicUrl
        }, 0)
        resolve();
      });
  }
});
