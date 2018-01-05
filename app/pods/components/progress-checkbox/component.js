import Component from '@ember/component';
import { isEmpty, isNone } from '@ember/utils';
import { computed, action } from 'ember-decorators/object';
import { service } from 'ember-decorators/service';
import { alias } from 'ember-decorators/object/computed';
import { task } from 'ember-concurrency';


export default class ProgressCheckboxComponenet extends Component {
	@service api
	@service store

	tagName = 'span'

	// fa icon name for the progress
	@computed ('content.progress')
	iconName () {
		let progressId = this.get('content.progress.id')
		let progress = this.get('content.progress')
		if (isNone (progressId)) {
			return 'fa fa-exclamation-circle'
		} 

		switch (progress.get('status')) {
			case 'ATTEMPTED' : return 'fa fa-times'; break;
			case 'DONE': return 'fa fa-check'; break;
			default: return 'fa fa-question-circle-o'; break;
		}
	}

	@computed ('content.progress')
	isDone () {
		return (this.get('content.progress.status') === 'DONE')
	}

	saveProgressTask = task( function * (progress) {
		progress = yield progress
		yield progress.save()
		this.get('content').set('progress', progress)
	})

	@action
	markAsDone () {
		let progressId = this.get('content.progress.id')
		let progress = this.get('content.progress')

		if ( isNone(progressId) ) {
			progress = this.get('store').createRecord('progress', {
				status: 'DONE',
				content:  this.get('content'),
				runAttempt: this.get('runAttempt')
			})
		} else {
			this.set("content.progress.status", "DONE")
		}
		this.get('saveProgressTask').perform(progress)
	}

	@action
	markAsUnDone () {
		let progress = this.get('content.progress')
		progress.set("status", "UNDONE")
		this.get('saveProgressTask').perform(progress)
	}

}
