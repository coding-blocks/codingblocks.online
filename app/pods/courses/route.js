/**
 * Created by abhishek on 03/07/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        "use strict";
      return this.store.query (
        'course', {
          custom: {
            ext: 'url',
            url: 'all'
          }
        }
      )
    }
});
