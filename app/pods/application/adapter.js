import DS from 'ember-data';
import ENV from '../../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  namespace: 'api',
  host: ENV.apiEndpoint,
  pathForType: function (type) {
    const original = this._super(...arguments)
    return Ember.String.underscore(original)
  },
  authorizer: 'authorizer:custom'
});
