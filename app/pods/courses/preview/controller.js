import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  api: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  actions: {
    enrollThisCourse (run) {
      this.get('api').request('/run_attempts', {
        method: 'POST',
        data: {
          'run-id': run.id
        },
        json: true
      }).then(data => {
         if(data.status === 'success')
           this.transitionToRoute('classroom.run.index', data.id)
      }).catch(err => {
          // fuck off
      })
    }
  }
});
