import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin,{
  session: Ember.inject.service(),
  currentUserSer: Ember.inject.service('current-user'),
  model(){
    
  }
});
