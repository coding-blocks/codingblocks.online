import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    actions: {
        login() {
            var redirectionPath = window.location.pathname;
            redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
            localStorage.setItem('redirection-path', redirectionPath);
            window.location = "https://account.codingblocks.com/oauth/authorize?" +
              "response_type=code" +
              "&client_id=2146237097" +
              "&redirect_uri=" + config.publicUrl
        },
        invalidateSession() {
            this.get('session').invalidate();
        }
  }
});
