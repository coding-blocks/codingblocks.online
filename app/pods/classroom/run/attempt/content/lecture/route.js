import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model (params) {

    const lecture = this.store.findRecord('lecture', params.lectureId, {reload: true})
    const awsData = lecture.then(lecture => {
      const api = this.get('api')
      return api.request('/aws/cookie', {
        data: {
          url: lecture.get('video_url')
        }
      })
    })

    return Ember.RSVP.hash({
      lecture,
      awsData
    })
  },
  setupController(controller, model) {
    controller.set('lecture', model.lecture)
    controller.set('awsData', model.awsData)
  },
  afterModel () {
    // make this content attempted
    return this.get('api').request('/progresses',{
      method: 'POST',
      data: {
        contentId: this.paramsFor('classroom.run.attempt.content').contentId,
        runAttemptId: this.paramsFor('classroom.run').runAttemptId,
        status: 'ATTEMPTED'
      }
    })
  }
});
