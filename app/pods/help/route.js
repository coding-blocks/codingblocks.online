import Ember from 'ember';
import env from "vlyop-frontend/config/environment";

export default Ember.Route.extend({
    help: {
        'EMAIL_NOT_VERIFIED': `You need to verify your email before you can acess any of our courses.
                                You can do so <a href="${env.oneauthURL}">here</a>`
    },

    model (params) {
        return this.get('help')[params.errorCode]
    }
});
