/**
 * Created by umair on 6/23/17.
 */

import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    routing: Ember.inject.service('-routing'),
    session: Ember.inject.service(),
    currentUser: Ember.inject.service('current-user'),
    raven : Ember.inject.service(),
    beforeModel(transition) {
        if (!this.get('session.isAuthenticated') && transition.queryParams.code !== undefined) {
            this.get('session').authenticate('authenticator:custom', transition.queryParams.code).then(() => {
                var retrievedPath = localStorage.getItem('redirection-path');
                localStorage.removeItem('redirection-path');
                // DONOT FUCKING TOUCH THIS FFS!!!
                //window.location.href = retrievedPath;
            }).catch((reason) => {
                this.get('raven').captureException(new Error(reason.error.error) ,reason)
            });
        }
    },
    model() {
        if (this.get('session.isAuthenticated')) {
            const user = this._loadCurrentUser();
            this.get('raven').callRaven('setUserContext', user)
            return user
        }
    },
    _loadCurrentUser() {
        return this.get('currentUser').load();
    },
    setupController(controller, model) {
      this._super(controller, model);
      controller.set('routing', this.get('routing'));
    }
});

