import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  data: null,
  session: service('session'),
  store: service(),
  user: null,
  load () {
    if (this.get('session.isAuthenticated')) {
      let token = this.get('session.data.authenticated.jwt');
     return this.get('store').queryRecord('user', { custom: {ext: 'url', url: 'me' }}).then(user=>{
       this.set('user',user)
       return user
     })
    }
  },

  // Returns a hash of authentication headers suitable for injection into $.ajax
  // requests, provided the user is logged in.
  getAuthHeaders () {
    if (this.get('session.isAuthenticated')) {
      const sessionData = this.get('session.data.authenticated');

      return {
        'oauth-id': sessionData.oauth_id,
        'Authorization': `JWT ${sessionData.jwt}`,
        'user-id': sessionData.user_id
      }
    }

    return { }
  }
});
