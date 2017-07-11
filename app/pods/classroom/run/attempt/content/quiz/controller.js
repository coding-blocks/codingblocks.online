import Ember from 'ember';
import U from '../../../../../../utils';

export default Ember.Controller.extend({
  api: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  notify: Ember.inject.service(),
  queryParams: ['q'],
  q: null, // queryParam to set the question to display
  question: Ember.computed('q', function () {
    const questions = this.get('quiz.questions'),
      q = this.get('q')
      return this.get('quiz.questions').objectAt(q-1)
  }),
  nextQuestion: Ember.computed('q', function () {
    const q = parseInt(this.get('q'))
    return (q+1) <= this.get('quiz.questions.length') ? (q+1) : null ;
  }),
  prevQuestion: Ember.computed('q', function () {
    const q = parseInt(this.get('q'))
    return (q-1) >= 1 ? q-1 : null
  }),
  actions: {
    submitQuiz () {
      const questionSerialized = []
      const quizId = this.get('quiz.id')
      this.get('quiz.questions').forEach(question => {
        questionSerialized.push({
          questionId: question.get('id'),
          selectedChoiceId: question.get('selectedChoice.id')
        })
      })

      this.get('api').request(`quizzes/${quizId}/submit`,{
        contentType: 'application/json; charset=utf-8',
        method: 'POST',
        data: {
          "run-id": this.get('runId'),
          "user-id": this.get('currentUser.user.id'),
          "question": questionSerialized
        },
        json: true
      }).then(suc => {
        this.transitionToRoute('classroom.run.attempt.progress', this.get('contentId'))
      }).catch(err => {
          console.error(err)
          this.get('notify').alert('Something Went Wrong, Please try again!')
      })
    }
  }
});
