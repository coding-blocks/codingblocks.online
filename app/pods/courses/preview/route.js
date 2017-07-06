import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').queryRecord('course', {custom: {ext: 'url', url: 'preview\\' + params.courseId}});
  }
});
