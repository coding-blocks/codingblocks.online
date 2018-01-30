import Ember from 'ember';

export default Ember.Component.extend({
    runPercent:Ember.computed('run.percentComplete',function(){
        return isNaN(this.get('run.percentComplete')) ? '0.00' : this.get('run.percentComplete');
    })
});