/**
 * Created by abhishek on 27/06/17.
 */
'use strict';

import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	//TODO: Change this to tell user, he needs to be loggedIn
	authenticationRoute: 'index'
});