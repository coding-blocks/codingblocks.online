/**
 * Created by abhishek on 19/06/17.
 */
'use strict';

import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(sessionData, block) {
    block("oauth-id", sessionData.oauth_id); //This won't be required most probably. Need to remove it.
    block("Access-Token", sessionData.auth_token);
  }
});
