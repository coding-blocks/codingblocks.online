import Ember from 'ember';

export default Ember.Component.extend({
  showResults: false,
  results: Ember.Object.create(),
  didUpdateAttrs () {
    this.set('showResults',false)
    this.set('results', Ember.Object.create());
  },
  actions: {
    results () {
      // preprare results
      // use functional pipelining cuz it is cool af. *__*
      const score = this.get('content.questions')
        .toArray()
        .map(el => (el.get('myAnswer') == el.get('answer')))
        .reduce((acc,val) => acc+val,0)

      this.set('results.score',score)
      this.set('showResults', true)
    }
  }
});
