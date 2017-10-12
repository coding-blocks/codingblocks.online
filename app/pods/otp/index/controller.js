import Controller from '@ember/controller';
import { service } from 'ember-decorators/service';
import { alias } from 'ember-decorators/object/computed';
import { task } from 'ember-concurrency';

export default class OtpController extends Controller {
	@service currentUser
	@service api
	@service router

	sentOTP = false
	otp = ''
	email = ''
	error = null
	@alias('currentUser.user') user


	sendOtpTask = task(function *() {
		const api = this.get('api'),
			email = this.get('email')

		yield api.request('/otp/request', {
			method: 'POST',
			data: {email}
		}).then( resp => {
			this.set('sentOTP', true)
			this.set('error', null)
		}).catch( err => {
			this.set('error', 'Cannot Send OTP to that email. Please use your registered email.')
		})
	}).drop()

	verifyOtpTask = task(function *() {
		const api = this.get('api'),
			otp = this.get('otp'),
			email = this.get('email')

		yield api.request('/otp/verify', {
			method: 'POST',
			data: {email, otp}
		}).then( resp => {
			this.get('router').transitionTo('otp.done')
		}).catch( err => {
			this.set('error', 'OTP cannot be verified or has been used already')
		})	
	}).drop()

}