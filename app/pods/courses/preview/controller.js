import Ember from 'ember';

export default Ember.Controller.extend({
  api: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  actions: {
    enrollThisCourse (run) {

      const userId = this.get('currentUser.user.id');
      this.get('api').request('/run_attempts', {
        method: 'POST',
        data: {
          'user-id': userId,
          'run-id': run.id
        },
        json: true
      }).then(data=>{
         if(data.status === 'success')
           this.transitionToRoute('classroom.run.index', run.id)
      }).catch(err=> {
          // fuck off
      })
    }
  }
});
