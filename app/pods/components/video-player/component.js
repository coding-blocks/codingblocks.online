import Component from '@ember/component';
import { action } from 'ember-decorators/object'

export default class VideoPlayer extends Component {
  playbackRate = 1
  toggle = true
  hls 
  config
  playerElement

  didReceiveAttrs () {
    this._super(...arguments)
    console.log('didReceiveAttrs')
    const self = this
    const config = {
      xhrSetup (xhr, url) {
        // TODO: send a request to backend and get a signed url to the segment as 301
        try {
          const awsData = self.get('awsData')
          const encoded = Ember.$.param({
            "Key-Pair-Id": awsData.keyId,
            "Signature": awsData.signature,
            "Policy": awsData.policyString
          })
          xhr.open('GET', `${url}?${encoded}`, true)
        } catch(e) {
          console.error(e)
        }
      }
    }
    this.set('config', config)
    const hls = new Hls(config)
    hls.loadSource(this.get('src'));
    this.set('hls', hls)
  }
  didInsertElement () {
    this._super(...arguments)
    console.log('didInsertElement')
    const video = this.$('#video')[0]
    this.set('playerElement', video)
  }
  didRender() {
    this._super(...arguments)
    console.log('didRender')
    const video = this.get('playerElement')
    const hls = this.get('hls')
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play()
    })
  }

  @action
  changeSpeed(val){
     const rate = this.get('playbackRate')+val;
     const video = this.$('#video')[0];
     if(rate<=3 && rate>=0.5){
  	    video.playbackRate = rate;
      this.set('playbackRate',rate);
     }
  }
}
