import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        onVideoCompleted () {
            this.send("transitionToNextContent")
        }
    }
});
