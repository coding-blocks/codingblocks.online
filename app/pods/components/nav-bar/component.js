import Ember from 'ember'
import config from '../../../config/environment';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    router: Ember.inject.service('router'),
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
            var redirectionPath = this.get('router.currentURL');
            localStorage.setItem('redirectionPath', redirectionPath);
            window.location = `https://account.codingblocks.com/oauth/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${config.publicUrl}`
        },
        invalidateSession () {
            window.location.href = this.get('logoutURL')
        }

    }
});
