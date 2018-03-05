import Ember from 'ember';

const ErrorPageContent = {
    "402": `The Content you tried to access is unavailable. 
            If you think this is a mistake please contact support.
            <small> <pre> Error Code: 402 </pre><small>
            `
}

export default Ember.Route.extend({
    model (params) {
        return ErrorPageContent[params.errorId]
    }
});
