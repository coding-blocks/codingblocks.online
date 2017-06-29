/**
 * Created by umair on 6/23/17.
 */

import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
    session: Ember.inject.service(),
    currentUser: Ember.inject.service('current-user'),
    beforeModel(transition) {
        console.log("before model");
        if (!this.get('session.isAuthenticated') && transition.queryParams.code !== undefined) {
            console.log("calling authenticate function");
            this.get('session').authenticate('authenticator:custom', transition.queryParams.code).then(()=>{
            var retrievedPath = localStorage.getItem('redirection-path');
            localStorage.removeItem('redirection-path');
            window.location.href = retrievedPath;
            }).catch((reason) => {
                // console.log("not logged in", reason);
            });
        }
    },
    setupController (controller,model) {
      controller.set('user', this.get('currentUser') )
    }
});

