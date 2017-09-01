import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  api: Ember.inject.service(),
  init() {
    this._super();
  },
  actions: {
    enrollThisCourse (run) {
      this.get('api').request('/run_attempts', {
        method: 'POST',
        data: {
          'run-id': run.id
        },
        json: true
      }).then(data => {
        if (data.status === 'success') {
          this.get('transition')('classroom.run.index', data.id);
        }
      }).catch(err => {
        // fuck off
      })
    }
  }
});
