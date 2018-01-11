import Ember from 'ember';
import SHA256 from 'cryptojs/sha256'
import env from '../../config/environment';

export default Ember.Route.extend({
	model (params) {
		const content = this.store.findRecord('content', params.contentId)
		return Ember.RSVP.hash({
			content,
			identifier: SHA256(env.environment + params.contentId).toString()
		})
	},
	setupController(controller, model) {
		controller.set("disqusIdentifier", model.identifier)
		controller.set("content", model.content)
	}
});
