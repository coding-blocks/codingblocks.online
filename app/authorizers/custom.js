/**
 * Created by abhishek on 19/06/17.
 */
'use strict';

import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(sessionData, block) {
    block("Authorization", "Bearer " + sessionData.auth_token);
  }
});
