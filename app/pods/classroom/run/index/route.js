import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('classroom.run')
  },
  setupController (controller, model) {
    controller.set('run', model);
    controller.set('course', model.get('course'));
    let sections = model.get('course.sections');

    sections.find( section => {
      const contentToResume = section.get('contents').find(content => {
        return content.get('progress').content === null
      })
      if (contentToResume)
        return controller.set('contentToResume', contentToResume.id)
    })

    if (Ember.isNone(controller.get('contentToResume')))
      controller.set("contentToResume", sections.objectAt(0).get('contents').objectAt(0).id)

  }
});
