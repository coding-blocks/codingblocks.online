import Ember from 'ember'
import config from '../../../config/environment';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    routing: Ember.inject.service('-routing'),
    $ : Ember.$,
    img : null,
    anchorColor: null,
    mainSection: null,

    init() {
      this._super(...arguments);
      this.set("logoutURL", config.oneauthURL + 'logout?redirect=' + config.publicUrl + '/logout')
    },

    actions: {
        login() {
            var redirectionPath = window.location.pathname;
            redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
            localStorage.setItem('redirection-path', redirectionPath);
            window.location = `https://account.codingblocks.com/oauth/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${config.publicUrl}`
        },
        invalidateSession () {
            window.location.href = this.get('logoutURL')
        }

    }
});
