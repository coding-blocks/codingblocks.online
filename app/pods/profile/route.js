import Ember from 'ember';

export default Ember.Route.extend({
    currentUser: Ember.inject.service('current-user'),
    model() {
        return Ember.RSVP.hash({
            user: this.get('store').queryRecord('user', {custom: {ext: 'url', url: 'me'}}),
            runs: this.get('store').query('run', {enrolled: true})
        })

        
    },

    actions: {
        error (error, transition){
            if(error.errors[0].status== '401'){
                console.log('error401');
                var redirectionPath = window.location.pathname;
                redirectionPath = redirectionPath.replace(/^\/|\/$/g, '');
                localStorage.setItem('redirectionPath', redirectionPath);
                this.transitionTo('help',401, {queryParams:{login_redirect: redirectionPath}});
            }
        }      
    },

    setupController (controller, model) {
        controller.set('user', model.user);
        controller.set('runs', model.runs);
    }
});
