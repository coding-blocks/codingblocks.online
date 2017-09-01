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
      //TODO: We probably need an else condition here
    })
    /*
    let breakFlag = false;
    for (let i = 0; i < sections.get('length'); ++i) {
      let section = sections.objectAt(i);
      for (let j = 0; j < section.get('contents.length'); ++j) {
        let content = section.get('contents').objectAt(j);
        if (content.get('progress').content == null) {
          controller.set('contentToResume', content.id);
          breakFlag = true;
          break;
        }
      }
      if (breakFlag) break;
    }
    */
  }
});
