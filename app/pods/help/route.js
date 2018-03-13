import Ember from 'ember';
import env from "vlyop-frontend/config/environment";

export default Ember.Route.extend({
    session: Ember.inject.service(),
    queryParams: {
        login_redirect:{refreshModel: false}
    },
    help: {
        'EMAIL_NOT_VERIFIED': `You need to verify your email before you can acess any of our courses.
                                You can do so on the <a href="${env.oneauthURL}">profile page here.</a><br>
                                
                                <p>If you have already verified your email and still seeing this, you need to logout,
                                and log In again.</p>
                                `,
        '401': 'You need to login first',                    
    },

    model (params) {
        if (params.errorCode == '401') {
            if (this.get('session.isAuthenticated')) {
                this.transitionTo(params.login_redirect)
            }
        }
        return {
            code: params.errorCode,
            content: this.get('help')[params.errorCode],
            params: params
        }
    },

});
