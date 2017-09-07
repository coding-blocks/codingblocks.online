import Ember from 'ember'
import config from '../../../config/environment';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    routing: Ember.inject.service('-routing'),
    navCustomisation: Ember.inject.service('set-offset'),
    $ : Ember.$,
    img : null,
    navbar: null,
    anchorColor: null,
    mainSection: null,

    init() {
      this._super();
      this.get('routing.currentRouteName');
    },

    checkRoute: Ember.observer('routing.currentRouteName', function () {

        this.get('navCustomisation').setNavColor(this.get('routing.currentRouteName'));
    }),

    actions: {
        login() {
            var redirectionPath = window.location.pathname;
            redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
            localStorage.setItem('redirection-path', redirectionPath);
            window.location = `https://account.codingblocks.com/oauth/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${config.publicUrl}`
        },
        invalidateSession() {
            this.get('session').invalidate();
        }

    },

   didInsertElement() {
     this.get('navCustomisation').setNavColor(this.get('routing.currentRouteName'));
     this.get('navCustomisation').scrollHomepage();

   }

});
