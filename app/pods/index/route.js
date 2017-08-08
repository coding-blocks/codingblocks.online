import Ember from 'ember';


export default Ember.Route.extend({
    model () {
      "use strict";

      const customParams = { ext: 'url', url: 'all' }

      return Ember.RSVP.hash ({
        allCourses: this.store.query ('course', { custom: customParams }),
        recommendedCourses: this.store.query ('course', {
          custom: customParams,
          recommended: true
        })
      })
    }

});



