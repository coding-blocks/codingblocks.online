import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('classroom.run')
  },
  setupController (controller, model) {
    controller.set('run', model)
    controller.set('course', model.get('course'));
  }
});
