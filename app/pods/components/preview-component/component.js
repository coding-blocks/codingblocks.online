import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  'current-user': Ember.inject.service(),
  init() {
    this._super();
    this.set('user', this.get('current-user').get('user'));
  }
});
