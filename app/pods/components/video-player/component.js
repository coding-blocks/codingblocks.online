import Ember from 'ember';

export default Ember.Component.extend({
  playbackRate:1,
  toggle: true,
  didInsertElement() {
    this._super(...arguments)
    const video = this.$('#video')[0]
    const self = this;
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
          console.log(url, encoded);
          xhr.open('GET', `${url}?${encoded}`, true)
        } catch(e) {
          console.error(e)
        }
      }
    }
    const hls = new Hls(config)
    window.h = hls
    hls.loadSource(this.get('src'))
    hls.attachMedia(video)
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play()
    })
  },
  hidePlaylist(playlist,video) {
    playlist.css({transform: 'translateX(1800px)',
      transition: '.5s'
    });
    video.css({width: '100vw',
      transition: '.4s'}
    );
  },
  showPlaylist(playlist,video) {
    playlist.css({transform: 'translateX(0px)',
      transition: '.5s'
    });
    video.css({width: '75vw',
               transition: '.5s'}
             );
  },
  actions:{
     changeSpeed(val){
         const rate = this.get('playbackRate')+val;
         const video = this.$('#video')[0];
         if(rate<=3 && rate>=0.5){
     	    video.playbackRate = rate;
	        this.set('playbackRate',rate);
         }
     },
    togglePlaylist() {
       console.log("main");
       const playlist = Ember.$('.sections');
       const video    = Ember.$('.video-container');

       if(this.toggle) {
         this.hidePlaylist(playlist,video);
       }
       else {
         this.showPlaylist(playlist,video);
       }
      console.log(this.toggle);
       this.toggle = !this.toggle;
    }

  }
});
