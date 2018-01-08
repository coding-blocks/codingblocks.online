import Ember from 'ember';
import SHA256 from 'cryptojs/sha256'
import env from '../../config/environment';

export default Ember.Route.extend({
	model (params) {
		return SHA256(env.environment + params.contentId).toString()
	},
	setupController(controller, model) {
		controller.set("disqusIdentifier", model)
	}
});
