/**
 * Created by umair on 8/24/17.
 */

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('document', params.documentId)
  }
});
