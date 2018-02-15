import Ember from 'ember';
import env from "vlyop-frontend/config/environment";

export default Ember.Route.extend({
    help: {
        'EMAIL_NOT_VERIFIED': `You need to verify your email before you can acess any of our courses.
                                You can do so on the <a href="${env.oneauthURL}">profile page here.</a>`
    },

    model (params) {
        return {
            code: params.errorCode,
            content: this.get('help')[params.errorCode]
        }
    }
});
